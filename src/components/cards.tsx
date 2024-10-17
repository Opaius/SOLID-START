const firstVar = (
  <A href="/oferta-craciun" class="w-full h-full">
    <div class="flex flex-col p-10 h-full">
      <span class="flex justify-between p-7 text-xl font-bold rounded-t-md text-primary bg-background">
        Ofertă Crăciun <TbChristmasTree size={30} class="text-primary" />
      </span>
      <span class="p-8 pt-0 text-sm font-light bg-background">
        Sărbătorește tradiția{" "}
        <u class="font-semibold text-primary">Crăciunului din Bucovina</u>{" "}
        împreună cu familia ta. Mâncare, băutură, activități tradiționale, tot
        ce ai nevoie pentru voie bună.
      </span>
      <FancyImageSlider images={firstCardImgs} />
    </div>
  </A>
);
