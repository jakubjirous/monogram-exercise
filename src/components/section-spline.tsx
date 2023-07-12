import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export const SectionSpline = () => {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<Spline
					scene="https://prod.spline.design/Q8gJIB6FoodYWF3w/scene.splinecode"
					className="w-screen max-w-[1500px] aspect-square"
				/>
			</Suspense>
		</div>

		// <section className="section globe">
		// 	<div
		// 		className="globe-spline"
		// 		style={{ backgroundImage: `url(${optimizedGlow.src})` }}
		// 	>
		// 		<Suspense fallback={<div>Loading...</div>}>
		// 			<Spline
		// 				scene="https://prod.spline.design/Q8gJIB6FoodYWF3w/scene.splinecode"
		// 				className="w-screen max-w-[1500px] aspect-square"
		// 			/>
		// 		</Suspense>
		// 	</div>
		// </section>
	);
};
