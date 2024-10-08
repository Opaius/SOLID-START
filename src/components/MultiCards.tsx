import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function MultiCards() {
  return (
    <div>
      <FirstCard />
    </div>
  );
}

function FirstCard() {
  return (
    <Card class="bg-primary text-background p-4 w-[15rem] h-[20rem]">
      <CardHeader>
        <CardTitle>Oferta Revelion 2024-2025 în Bucovina</CardTitle>
        <CardDescription class="text-primary-foreground">
          Petrece venirea anului nou împreună cu cei dragi. Bucovina te așteaptă
          cu tradiții, bucate și voie bună.
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
