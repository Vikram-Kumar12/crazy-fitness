import { ArrowLeft } from "lucide-react";
import Seo from "../components/Seo";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" path="/404" />
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink text-center text-white">
        <div className="pointer-events-none absolute inset-0 bg-brand/10 blur-[120px]" />
        <div className="container-x relative z-10">
          <p className="font-display text-[28vw] leading-none text-white/5 sm:text-[16rem]">
            404
          </p>
          <div className="-mt-8 sm:-mt-16">
            <h1 className="font-display text-5xl tracking-wide">Lost your rhythm?</h1>
            <p className="mx-auto mt-4 max-w-md text-white/60">
              The page you're looking for doesn't exist — but your next workout does.
            </p>
            <div className="mt-8 flex justify-center">
              <Button to="/" size="lg" icon={ArrowLeft}>
                Back to home
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
