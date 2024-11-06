import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerLabel,
  DrawerTrigger,
} from "@/components/ui/drawer";
export function FancyMenu() {
  return (
    <Drawer  side="left">
      <DrawerTrigger>Open</DrawerTrigger>
    </Drawer>
  );
}
