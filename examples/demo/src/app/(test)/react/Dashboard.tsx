'use client';
import { useState } from 'react';
import { InnerDot } from './InnerDot';
import Link from 'next/link';

export const Dashboard: React.FC = () => {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	// Define theme classes based on state
	const containerClasses = theme === 'light' ? 'bg-gray-200 text-gray-900' : 'bg-gray-900 text-gray-200';

	const itemClasses = theme === 'light' ? 'bg-gray-900 text-gray-200' : 'bg-gray-200 text-gray-900';

	return (
		<div className={`${containerClasses} flex h-screen w-screen flex-col items-center justify-start p-5`}>
			<div className="flex flex-row items-center gap-2">
				<button
					type="button"
					onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
					className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
					Toggle Theme (Current: {theme})
				</button>
				<Link
					href="/zero-ui"
					className="rounded-md px-4 py-2 text-blue-500 underline transition-colors">
					Zero-UI 10k Node Test
				</Link>
			</div>
			<div className="text-lg text-gray-500">10,000 nodes with Nested Node using React State</div>
			<div
				className="grid aspect-square gap-0.5 border-1 border-red-300 text-xs"
				style={{ gridTemplateColumns: 'repeat(100, 1fr)', gridTemplateRows: 'repeat(100, 1fr)', width: 'min(90vw, 90vh)', height: 'min(90vw, 80vh)' }}>
				{Array.from({ length: 10000 }).map((_, index) => (
					<div
						key={index}
						className={`${itemClasses} flex items-center justify-center rounded-sm`}>
						<InnerDot theme={theme} />
					</div>
				))}
			</div>
		</div>
	);
};
