'use client';
import { useUI } from '@react-zero-ui/core';
import clsx from 'clsx';
import Link from 'next/link';
import { Icon } from './Icon';

export const MobileMenu: React.FC<{ navItems: { name: string; href: string }[] }> = ({ navItems }) => {
	const [, setMenuOpen] = useUI<'closed' | 'open'>('mobile-menu', 'closed');
	return (
		<ul className={clsx('mobile-menu-container flex flex-col gap-3 rounded-b-lg border-gray-200 px-4 transition-all duration-300 ease-in-out md:hidden')}>
			{navItems.map((item, index) => (
				<li
					key={item.name}
					className="mobile-menu-item transform text-lg transition-all duration-300 ease-in-out"
					style={{ '--index': index } as React.CSSProperties}>
					<Link
						href={item.href}
						onClick={() => setMenuOpen((prev) => (prev === 'closed' ? 'open' : 'closed'))}
						className="block pt-4 font-medium">
						{item.name}
					</Link>
				</li>
			))}
			<li className={clsx('mobile-menu-item transform pt-3 transition-all duration-300 ease-in-out')}>
				<Link
					href="https://github.com/react-zero-ui"
					target="_blank"
					onClick={() => setMenuOpen((prev) => (prev === 'closed' ? 'open' : 'closed'))}
					className="bubble-hover flex rounded-full border border-gray-200 bg-white px-3 py-2 text-center font-medium shadow-lg duration-300 hover:border-white items-center justify-center gap-2 ">
					<Icon
						name="github"
						height={24}
						width={24}
						className="text-black"
					/>
					GitHub
				</Link>
			</li>
		</ul>
	);
};
