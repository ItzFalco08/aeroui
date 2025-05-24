import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'
import { Leaf, AlignRight, Github } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Input } from './ui/input'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from './ui/button'

const docs = [
  // getting started -> Installation, Usage
  {
    title: "Getting Started",
    pages: [
      {
        title: "Overview",
      },
      {
        title: "Installation",
      },
    ],
  },

  // socials --> Hire Me, Github, Portfolio, Fiverr, LinkedIn, Telegram
  {
    title: "Developer",
    pages: [
      {
        title: "About Me",
      },
    ],
  },

  // components -> Hero, Navbar
  {
    title: "Components",
    pages: [
      {
        title: "Hero",
      },
      {
        title: "Navbar",
      },
      {
        title: "Button",
      },
      {
        title: "Card",
      },
    ],
  },
]

const components = [
  {
    title: "Hero",
    href: "/docs/hero",
    description:
      "Cool hero sections made with tailwindcss and framer motion",
  },
  {
    title: "Navbars",
    href: "/docs/navbar",
    description:
      "Modern Navbars built with tailwindcss",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

const Nav = () => {

  return (
    <div className='w-full backdrop-blur-md bg-white/20 dark:bg-black/20 z-[100] !py-[20px] absolute top-0 left-0 h-[50px] flex px-[16px] md:px-12 justify-between items-center'>
      <div className=' flex gap-5 items-center'>
        <Link href="/" className=' md:mr-3 flex gap-2'><Leaf className='w-5 ml-2 ' /> <p className="hidden md:block font-semibold text-xl">AeroUI</p></Link>

        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-">Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Leaf className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          AeroUI
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Framer motion and
                          Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs/overview" title="Overview">
                    Re-usable components and pages built using Framer motion and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/aboutme" title="About Me">
                    About the developer of aeroUI
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-">Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className='flex md:gap-2 items-center w-full md:w-fit'>
        <Input className="" placeholder="Search Components.." />
        <Link href="https://github.com/ItzFalco08/aeroui">
        <Button  variant="ghost" className="p-1 ml-2 px-2">
          <Github />
        </Button>
        </Link>
        <ModeToggle className="w-[44px]" />

        <Drawer>
          <DrawerTrigger>
            <AlignRight className='md:hidden' />
          </DrawerTrigger>

          <DrawerContent>
            <DrawerFooter>
              <div className='flex flex-col gap-2 h-[400px] overflow-auto'>
                {docs.map((doc) => (
                  <React.Fragment key={doc.title}>
                    <h1 className='text-lg font-semibold mt-4'>{doc.title}</h1>
                    {doc.pages.map((page) => (
                      <Link href={`/docs/${page.title.toLocaleLowerCase().replace(" ", "")}`} key={page.title}>
                        {page.title}
                      </Link>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
          </div>
      </div>
      )
}

      const ListItem = (({className, title, children}, ref) => {
  return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
      )
})
      ListItem.displayName = "ListItem"

      export default Nav