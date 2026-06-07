import React from 'react';
import {Bars,LayoutSideContentLeft, Bell, Envelope, Gear, House, Magnifier, Person} from "@gravity-ui/icons";
import {Button, Drawer} from "@heroui/react";
import Link from 'next/link';


const Sidebar = () => {

 const navItems = [
    {icon: House, label: "Dashboard", link:'/dashboard/recruiter'},
    {icon: Magnifier, label: "My Company", link:'/dashboard/recruiter/company'},
    {icon: Bell, label: "Manage Jobs",link: '/dashboard/recruiter/jobs'},
    {icon: Envelope, label: "Applications", link:'#'},
    {icon: Person, label: "Profile", link:'#'},
    {icon: Gear, label: "Settings", link:'#'},
  ];

  const navContent=<nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                  href={item.link}
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    type="button"
                  >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                  </Link>
                ))}
              </nav>


    return (
        <div>

            <aside className='hidden w-64 shrink-0 border-r border-default p-4 lg:block'>
                {navContent}
            </aside>

             <Drawer>
      <Button  className="lg:hidden" variant="secondary">
        <LayoutSideContentLeft/>
        Menu
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
             
                {navContent}
              
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
        </div>
    );
};

export default Sidebar;