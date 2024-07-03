/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wThrbNe6Eqs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-background">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <ScissorsIcon className="h-6 w-6" />
          <span className="sr-only">Barber Shop</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            {/* <img
              src="/placeholder.svg"
              width="800"
              height="600"
              alt="Barbershop Interior"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            /> */}
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Welcome to Our Barber Shop
              </h1>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience the best haircuts and grooming services in town. Our
                skilled barbers have been serving the community for over 20
                years.
              </p>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container mx-auto grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From classic cuts to modern styles, we offer a wide range of
                services to meet all your grooming needs.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-1 rounded-lg bg-background p-4">
                <h3 className="text-xl font-bold">Haircuts</h3>
                <p className="text-muted-foreground">
                  Our skilled barbers provide precision haircuts tailored to
                  your style and preferences.
                </p>
              </div>
              <div className="grid gap-1 rounded-lg bg-background p-4">
                <h3 className="text-xl font-bold">Shaves</h3>
                <p className="text-muted-foreground">
                  Experience a close, smooth shave with our traditional hot
                  towel service.
                </p>
              </div>
              <div className="grid gap-1 rounded-lg bg-background p-4">
                <h3 className="text-xl font-bold">Beard Trims</h3>
                <p className="text-muted-foreground">
                  Keep your beard looking sharp and well-groomed with our expert
                  beard trimming services.
                </p>
              </div>
              <div className="grid gap-1 rounded-lg bg-background p-4">
                <h3 className="text-xl font-bold">Coloring</h3>
                <p className="text-muted-foreground">
                  Refresh your look with our professional hair coloring
                  services.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Us
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our family-owned barber shop has been serving the community for
                over 20 years. We take pride in our skilled and experienced
                barbers, who are dedicated to providing the best possible
                service to our customers.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-1 rounded-lg bg-background p-4">
                <h3 className="text-xl font-bold">Our History</h3>
                <p className="text-muted-foreground">
                  The Barber Shop has been a fixture in the community for over
                  20 years. We've seen styles come and go, but our commitment to
                  quality service has remained the same.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="barbers"
          className="w-full py-12 md:py-24 lg:py-32 border-t"
        >
          <div className="container mx-auto grid gap-6 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet Our Barbers
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our skilled and experienced barbers are dedicated to providing
                the best possible service to our customers.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="grid gap-1 rounded-lg bg-background p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold">John Doe</h4>
                    <p className="text-muted-foreground">
                      Master Barber, 15 years experience
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-1 rounded-lg bg-background p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold">Jane Smith</h4>
                    <p className="text-muted-foreground">
                      Barber, 10 years experience
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-1 rounded-lg bg-background p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold">Michael Johnson</h4>
                    <p className="text-muted-foreground">
                      Barber, 8 years experience
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-1 rounded-lg bg-background p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>ED</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold">Emily Davis</h4>
                    <p className="text-muted-foreground">
                      Barber, 6 years experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 border-t"
        >
          <div className="container mx-auto grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Us
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Visit us at our conveniently located shop, or reach out to
                schedule an appointment.
              </p>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    123 Main St, Anytown USA
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    Monday - Saturday: 9am - 6pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                  <p className="text-muted-foreground">(555) 555-5555</p>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2">
                <Input
                  type="text"
                  placeholder="Name"
                  className="px-3 py-2 text-sm bg-transparent rounded-lg focus-visible:ring-0 ring-0 focus-visible:ring-offset-0"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="px-3 py-2 text-sm bg-transparent rounded-lg focus-visible:ring-0 ring-0 focus-visible:ring-offset-0"
                />
                <Textarea
                  placeholder="Message"
                  className="px-3 py-2 text-sm bg-transparent rounded-lg focus-visible:ring-0 ring-0 focus-visible:ring-offset-0"
                />
                <Button type="submit" className="mt-2">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 The Barber Shop. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ScissorsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </svg>
  );
}
