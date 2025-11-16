// File: components/NgwaDayFrameGenerator.jsx

'use client'

import React, { useRef, useState } from 'react'

// NgwaDay Frame Generator
// - Upload a square or rectangular photo; it will be clipped into a circular frame
// - Text runs around the circle using an SVG textPath
// - You can upload a custom logo (or leave blank to use the default placeholder)
// - Export the framed result as a PNG suitable for Facebook profile pictures

export default function NgwaDayFrameGenerator() {
  const [photo, setPhoto] = useState(null)
  const [logo, setLogo] = useState(null)
  const [scale, setScale] = useState(1)
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const svgRef = useRef(null)

  // default text
  const frameText = 'I AM AN NGWADAY AMBASSADOR'

  function handleFileChange(e, setFunc) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setFunc(reader.result)
    reader.readAsDataURL(file)
  }

  // export SVG to PNG (downloads an 800x800 PNG)
  async function exportAsPNG() {
    const svgEl = svgRef.current
    if (!svgEl) return

    const serializer = new XMLSerializer()
    const svgString = serializer.serializeToString(svgEl)
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(svgBlob)

    // create image
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const size = 800 // export size in px (square)
      const canvas = document.createElement('canvas')
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext('2d')
      // white background (Facebook supports PNG with transparency but a white bg is more 'profile-picture' friendly)
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, size, size)
      // draw image scaled to fit
      ctx.drawImage(img, 0, 0, size, size)
      const a = document.createElement('a')
      a.href = canvas.toDataURL('image/png')
      a.download = 'ngwaday_frame.png'
      a.click()
      URL.revokeObjectURL(url)
    }
    img.onerror = (err) => {
      console.error('Failed to convert SVG to image', err)
      URL.revokeObjectURL(url)
    }
    img.src = url
  }

  // Build transform string based on scale and offsets
  const imageTransform = `translate(${offsetX} ${offsetY}) scale(${scale})`

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-3">NgwaDay Round Frame Generator</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">Upload photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setPhoto)}
            className="mb-3"
          />

          <label className="block mb-2">Upload NgwaDay logo (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setLogo)}
            className="mb-3"
          />

          <div className="space-y-2">
            <div>
              <label className="block text-sm">Scale</label>
              <input
                type="range"
                min="0.6"
                max="1.8"
                step="0.01"
                value={scale}
                onChange={(e) => setScale(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm">Offset X</label>
              <input
                type="range"
                min="-200"
                max="200"
                step="1"
                value={offsetX}
                onChange={(e) => setOffsetX(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm">Offset Y</label>
              <input
                type="range"
                min="-200"
                max="200"
                step="1"
                value={offsetY}
                onChange={(e) => setOffsetY(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={exportAsPNG}
              className="px-4 py-2 bg-blue-600 text-white rounded shadow"
            >
              Export PNG (800×800)
            </button>
            <button
              onClick={() => { setPhoto(null); setLogo(null); setScale(1); setOffsetX(0); setOffsetY(0) }}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Reset
            </button>
          </div>

          <p className="mt-3 text-sm text-gray-600">Recommendation: Exported PNG at 800×800 px fits well into Facebook profile crops. You may upload the file from your phone or desktop to set as profile picture.</p>
        </div>

        <div className="flex items-center justify-center">
          {/* SVG preview - square viewBox with circular clip */}
          <div className="w-64 h-64 md:w-72 md:h-72">
            <svg
              ref={svgRef}
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full rounded-full overflow-visible"
            >
              <defs>
                <clipPath id="circleClip">
                  <circle cx="500" cy="500" r="420" />
                </clipPath>

                {/* circle path used for text */}
                <path
                  id="textCircle"
                  d="M500,80
                     a420,420 0 1,1 -0.0001,0"
                />

                <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="8" floodOpacity="0.15" />
                </filter>
              </defs>

              {/* background ring */}
              <circle cx="500" cy="500" r="460" fill="#1B5E20" />

              {/* inner white band for nicer contrast */}
              <circle cx="500" cy="500" r="440" fill="#ffffff" />

              {/* clipped photo */}
              <g clipPath="url(#circleClip)">
                {photo ? (
                  // use foreignObject or image tag
                  <image
                    href={photo}
                    x={500 - 500}
                    y={500 - 500}
                    width={1000}
                    height={1000}
                    transform={imageTransform}
                    preserveAspectRatio="xMidYMid slice"
                  />
                ) : (
                  <rect x="80" y="80" width="840" height="840" fill="#e5e7eb" />
                )}
              </g>

              {/* decorative outer ring */}
              <circle cx="500" cy="500" r="420" fill="none" stroke="#0b6623" strokeWidth="20" />

              {/* text around circle */}
              <text
                fontSize="46"
                fontWeight="700"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#8B0000"
                style={{ letterSpacing: 2 }}
              >
                <textPath href="#textCircle" startOffset="0%">{frameText}</textPath>
              </text>

              {/* logo placed at bottom-right inside the ring */}
              {logo ? (
                <image href={logo} x="650" y="650" width="200" height="200" preserveAspectRatio="xMidYMid meet" filter="url(#softShadow)" />
              ) : (
                // placeholder logo: a small round badge with NGWA text
                <g transform="translate(660,660)">
                  <circle cx="0" cy="0" r="100" fill="#0b6623" filter="url(#softShadow)" />
                  <text x="0" y="10" textAnchor="middle" fontSize="40" fontWeight="700" fill="#fff">NGWA</text>
                </g>
              )}

              {/* inner small center circle border to create 'frame' feel */}
              <circle cx="500" cy="500" r="380" fill="none" stroke="#ffffff" strokeWidth="6" opacity="0.6" />

            </svg>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-700">
        <strong>How to use</strong>
        <ol className="list-decimal pl-5 mt-2">
          <li>Upload your photo (square works best). Use the sliders to position and scale the image inside the circle.</li>
          <li>Optionally upload the official NgwaDay logo to replace the placeholder badge.</li>
          <li>Click "Export PNG" to download an 800×800 PNG that fits Facebook profile picture cropping.</li>
        </ol>
      </div>
    </div>
  )
}
