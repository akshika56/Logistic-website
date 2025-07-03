"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"; // <- Make sure this exists or I can give it

const NavigationMenu = NavigationMenuPrimitive.Root;
const NavigationMenuList = NavigationMenuPrimitive.List;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuTrigger = NavigationMenuPrimitive.Trigger;
const NavigationMenuContent = NavigationMenuPrimitive.Content;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
const NavigationMenuIndicator = NavigationMenuPrimitive.Indicator;
const NavigationMenuViewport = NavigationMenuPrimitive.Viewport;

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
