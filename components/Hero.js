import Image from "next/image";
import { Button } from "@/components/ui/button"; // shadcn/ui button
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-white dark:bg-gray-900 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight text-gray-900 dark:text-gray-200">
          Streamline your links effortlessly!
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 opacity-80 leading-relaxed">
          Maximize your affiliate marketing potential with {config.appName}&apos;s intuitive link management solution
        </p>
        <Button variant="default" size="lg">
          Get {config.appName}
        </Button>
      </div>
      <div className="lg:w-full">
        <Image
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
