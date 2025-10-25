import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Fretso - Pet Business Management Software for India';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // Fetch Pacifico font with error handling
  let pacificoFont;
  try {
    const fontResponse = await fetch(
      'https://fonts.gstatic.com/s/pacifico/v22/FwZY7-Qmy14u9lezJ96A4sijpFu_.woff'
    );
    if (fontResponse.ok) {
      pacificoFont = await fontResponse.arrayBuffer();
    }
  } catch (error) {
    console.error('Failed to load Pacifico font:', error);
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #E50914 0%, #C40812 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: 140,
              fontWeight: 'normal',
              color: 'white',
              marginBottom: 30,
              letterSpacing: '0.05em',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              fontFamily: 'Pacifico, cursive, system-ui',
            }}
          >
            Fretso
          </div>
          
          {/* Tagline */}
          <div
            style={{
              fontSize: 56,
              color: 'white',
              fontWeight: 700,
              marginBottom: 20,
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            }}
          >
            Pet Business Management
          </div>
          
          {/* Subtitle */}
          <div
            style={{
              fontSize: 40,
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <span>Made for India</span>
            <span style={{ fontSize: 48 }}>🇮🇳</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      ...(pacificoFont && {
        fonts: [
          {
            name: 'Pacifico',
            data: pacificoFont,
            style: 'normal',
          },
        ],
      }),
    }
  );
}
