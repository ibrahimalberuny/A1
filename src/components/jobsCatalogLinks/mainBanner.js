import React from 'react'

export default function MainBanner({ lang }) {
    const isDefaultLang = lang === 'es'

		return (
    <div>
			<div className="text-center mx-auto text-white mt-5 d-none d-md-block">
				<img
					src="/images/jobs/banner.png"
					className="mb-5"
					alt={ isDefaultLang ? "Banner Trabaja con Nosotros" : "Banner Work with Us" }
					width={1000}
					height={700}
					placeholder="DOMINANT_COLOR"
					loading="lazy"
					quality="100"
				/>
			</div>
    </div>
  )
}
