import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function NewNavbar() {
    return (
        <Disclosure as="nav" className="bg-[rgb(31,31,31)]">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    {/* Mobile Menu Button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none">
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>

                    {/* Logo and Navigation */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img alt="Your Company" src="https://in.mathworks.com/academia/tah-portal/marathwada-mitra-mandals-college-of-engineering-31615241/_jcr_content/schoolLogo.adapt.full.medium.png/1666081643176.png" className="h-8 w-auto" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side (Notification & Profile) */}
                    <div className="flex items-center space-x-4">

                        {/* Notification Button */}
                        <button className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none">
                            <BellIcon aria-hidden="true" className="size-6" />
                        </button>

                        {/* Profile Dropdown */}
                        <Menu as="div" className="relative">
                            <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <img alt="User" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="size-8 rounded-full" />
                            </MenuButton>
                            <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5">
                                <MenuItem>
                                    {({ active }) => (
                                        <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                            Your Profile
                                        </a>
                                    )}
                                </MenuItem>
                                <MenuItem>
                                    {({ active }) => (
                                        <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                            Settings
                                        </a>
                                    )}
                                </MenuItem>
                                <MenuItem>
                                    {({ active }) => (
                                        <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                            Sign out
                                        </a>
                                    )}
                                </MenuItem>
                            </MenuItems>
                        </Menu>

                        {/* Additional Menu (Aligned Correctly) */}
                        <Menu as="div" className="relative">
                            <MenuButton className="inline-flex items-center justify-center rounded-[40px] bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                                </svg>

                            </MenuButton>
                            <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5">
                                <div className="py-1">
                                    <MenuItem>{({ active }) => <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>Edit</a>}</MenuItem>
                                    <MenuItem>{({ active }) => <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>Duplicate</a>}</MenuItem>
                                </div>
                                <div className="py-1">
                                    <MenuItem>{({ active }) => <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>Archive</a>}</MenuItem>
                                    <MenuItem>{({ active }) => <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>Move</a>}</MenuItem>
                                </div>
                                <div className="py-1">
                                    <MenuItem>{({ active }) => <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>Share</a>}</MenuItem>
                                    <MenuItem>{({ active }) => <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>Add to favorites</a>}</MenuItem>
                                </div>
                                <div className="py-1">
                                    <MenuItem>{({ active }) => <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>Delete</a>}</MenuItem>
                                </div>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton key={item.name} as="a" href={item.href} className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium')}>
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
