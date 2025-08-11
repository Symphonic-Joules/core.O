import { zeroSSR } from '@react-zero-ui/core/experimental';
import { InnerDot } from './InnerDot';
import Link from 'next/link';

export const Dashboard: React.FC = () => {
	// const theme = 'theme-test-ssr';
	// const themeValues = ['dark', 'light'];
	return (
		<div className="theme-test-ssr-light:bg-gray-200 theme-test-ssr-light:text-gray-900 theme-test-ssr-dark:bg-gray-900 theme-test-ssr-dark:text-gray-200 flex h-screen w-screen flex-col items-center justify-start p-5">
			<div className="flex flex-row items-center gap-2">
				<button
					type="button"
					{...zeroSSR.onClick('theme-test-ssr', ['dark', 'light'])}
					className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
					Toggle Theme (Current:{' '}
					{
						<>
							<span className="theme-test-ssr-dark:hidden">light</span>
							<span className="theme-test-ssr-light:hidden">dark</span>
						</>
					}
					)
				</button>
				<Link
					href="/react"
					className="rounded-md px-4 py-2 text-blue-500 underline transition-colors">
					React 10k Node Test
				</Link>
			</div>
			<div className="text-lg text-gray-500">10,000 nodes with Nested Node using Zero UI</div>
			<div
				className="grid aspect-square max-h-full w-full max-w-full gap-0.5 text-xs"
				style={{ gridTemplateColumns: 'repeat(100, 1fr)', gridTemplateRows: 'repeat(100, 1fr)', width: 'min(90vw, 90vh)', height: 'min(90vw, 80vh)' }}>
				{Array.from({ length: 10000 }).map((_, index) => (
					<div
						key={index}
						className="theme-test-ssr-light:bg-gray-900 theme-test-ssr-dark:bg-gray-200 theme-test-ssr-light:text-gray-200 theme-test-ssr-dark:text-gray-900 flex items-center justify-center rounded-sm">
						<InnerDot />
					</div>
				))}
			</div>
		</div>
	);
};
