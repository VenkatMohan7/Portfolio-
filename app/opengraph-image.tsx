import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const runtime = 'nodejs';
export const alt = 'Venkat Mohan Atmakuru - Software Engineer Portfolio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // Load local profile image as base64 for reliable rendering in OG image
  let imageBase64 = '';
  try {
    const imagePath = join(process.cwd(), 'public', 'profile.png');
    const imageBuffer = await readFile(imagePath);
    imageBase64 = `data:image/png;base64,${imageBuffer.toString('base64')}`;
  } catch (e) {
    console.error('Error reading profile image for OG:', e);
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#030712',
          backgroundImage:
            'radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.25) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(99, 102, 241, 0.2) 0%, transparent 40%)',
          padding: '60px 70px',
          fontFamily: 'sans-serif',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        {/* Left Content Column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxWidth: '640px',
            zIndex: 10,
          }}
        >
          {/* Status Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(30, 58, 138, 0.6)',
              border: '1px solid rgba(59, 130, 246, 0.5)',
              borderRadius: '9999px',
              padding: '6px 16px',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#34d399',
                marginRight: '10px',
              }}
            />
            <span
              style={{
                fontSize: '15px',
                fontWeight: 700,
                color: '#93c5fd',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              AVAILABLE FOR SOFTWARE ROLES
            </span>
          </div>

          {/* Greeting */}
          <span
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#60a5fa',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '6px',
            }}
          >
            HELLO, I&apos;M
          </span>

          {/* Name Headline */}
          <h1
            style={{
              fontSize: '52px',
              fontWeight: 900,
              lineHeight: 1.05,
              margin: '0 0 16px 0',
              color: '#ffffff',
              letterSpacing: '-1px',
            }}
          >
            VENKAT MOHAN <span style={{ color: '#38bdf8' }}>ATMAKURU</span>
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#93c5fd',
              margin: '0 0 16px 0',
            }}
          >
            Software Engineer &amp; Full Stack Developer
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.5,
              color: '#94a3b8',
              margin: '0 0 24px 0',
            }}
          >
            Building scalable web applications, robust backend architectures, and intelligent data systems using Python, Django, React, Node.js, and AWS Cloud.
          </p>

          {/* Skill Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            {['Python & Django', 'React & Node.js', 'AWS Cloud', 'PostgreSQL'].map((tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(51, 65, 85, 0.8)',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#cbd5e1',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Right Photo Card Frame */}
        <div
          style={{
            display: 'flex',
            position: 'relative',
            width: '380px',
            height: '480px',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '2px solid rgba(59, 130, 246, 0.6)',
            boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.35)',
            backgroundColor: '#020617',
          }}
        >
          {imageBase64 ? (
            <img
              src={imageBase64}
              alt="Venkat Mohan Atmakuru"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 15%',
              }}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
                fontWeight: 900,
                color: '#3b82f6',
              }}
            >
              VM
            </div>
          )}

          {/* Name overlay badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              right: '16px',
              backgroundColor: 'rgba(2, 6, 23, 0.85)',
              border: '1px solid rgba(71, 85, 105, 0.8)',
              borderRadius: '12px',
              padding: '10px 14px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: '16px',
                fontWeight: 800,
                color: '#ffffff',
              }}
            >
              Venkat Mohan Atmakuru
            </span>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#38bdf8',
              }}
            >
              Ready for Hire • B.Tech Software Eng.
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
