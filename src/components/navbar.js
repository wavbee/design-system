/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  BookmarkAltIcon,
  CalendarIcon,
  PlusIcon,
  PencilAltIcon,
  MenuIcon,
  PhoneIcon,
  UserGroupIcon,
  SupportIcon,
  ViewGridIcon,
  TableIcon,
  XIcon,
  ChartBarIcon,
  NewspaperIcon,
  CashIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

const distribution = [
  {
    name: 'Create Release',
    description: 'Upload and send your music to the top stores worldwide.',
    href: '#',
    icon: PlusIcon,
  },
  {
    name: 'Pending Releases',
    description: 'Checkout all the releases that are not live yet and might need your action.',
    href: '#',
    icon: PencilAltIcon,
  },
  {
    name: 'Discography',
    description: 'See the complete catalog of your music and manage your changes.',
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Your Artists',
    description: 'See all your artists, update and manage their profiles.',
    href: '#',
    icon: UserGroupIcon,
  },
];

const saleReports = [
  {
    name: 'Music Stats',
    description: 'Keep track of how well your music is doing and check how much you are earning.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Reports',
    description: 'Get detailed report of all your streams and revenue.',
    href: '#',
    icon: NewspaperIcon,
  },
  {
    name: 'Earnings',
    description: "Where's my money? See past earnings and when more are coming.",
    href: '#',
    icon: CashIcon,
  },
];

const callsToAction = [
  { name: 'Release Guidelines', href: '#', icon: BookmarkAltIcon },
  { name: 'Contact Support', href: '#', icon: PhoneIcon },
];
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Knowledge Base',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Release Guidelines',
    description: 'All you need to know before you release your music.',
    href: '#',
    icon: CalendarIcon,
  },
];
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 lg:justify-start lg:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://www.wavbee.com/wp-content/uploads/2021/07/logo-full-orginal-500p.png"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-wgray hover:text-charcoal hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-worange">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden lg:flex space-x-10">
            <a href="#" className="text-base font-medium text-wgray hover:text-charcoal">
              Overview
            </a>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-charcoal' : 'text-wgray',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-charcoal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-worange',
                    )}
                  >
                    <span>Distribution</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-wgray',
                        'ml-2 h-5 w-5 group-hover:text-gray-500',
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {distribution.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-worange" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-charcoal">{item.name}</p>
                                <p className="mt-1 text-sm text-wgray">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-charcoal hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-wgray" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-charcoal' : 'text-wgray',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-charcoal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-worange',
                    )}
                  >
                    <span>Sales & Reports</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-wgray',
                        'ml-2 h-5 w-5 group-hover:text-gray-500',
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {saleReports.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-worange" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-charcoal">{item.name}</p>
                                <p className="mt-1 text-sm text-wgray">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>

                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            {/* <a href="#" className="text-base font-medium text-wgray hover:text-charcoal">
              Artist Services
            </a> */}

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-charcoal' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-charcoal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-worange',
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500',
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-worange" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-charcoal">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-base font-medium text-gray-500">Recent Posts</h3>
                            <ul className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="text-base truncate">
                                  <a href={post.href} className="font-medium text-charcoal hover:text-gray-700">
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a href="#" className="font-medium text-worange hover:text-worange">
                              {' '}
                              View all posts
                              {' '}
                              <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-charcoal">
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-worange hover:bg-wred"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://www.wavbee.com/wp-content/uploads/2021/07/logo-full-orginal-500p.png"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-worange">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <TableIcon className="flex-shrink-0 h-6 w-6 text-worange" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-charcoal">Overview</span>
                  </a>
                  {distribution.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-worange" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-charcoal">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {/* <a href="#" className="text-base font-medium text-charcoal hover:text-gray-700">
                  Docs
                </a> */}
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-charcoal hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-worange hover:bg-wred"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  {' '}
                  <a href="#" className="text-worange hover:text-worange">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
