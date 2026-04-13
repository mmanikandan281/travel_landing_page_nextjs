import Link from 'next/link';

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff9f0_0%,#ffffff_45%,#fdf2e8_100%)] px-6 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[32px] bg-white shadow-[0_30px_80px_rgba(24,30,75,0.12)] lg:grid-cols-[0.95fr_1.05fr]">
          <section className="px-8 py-10 md:px-12 md:py-14">
            <h1 className="text-3xl font-black text-[#181E4B]">Create account</h1>
            <p className="mt-2 text-sm text-[#5E6282]">
              A small signup page so your navbar action has somewhere real to go.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label htmlFor="signup-name" className="mb-2 block text-sm font-medium text-[#181E4B]">
                  Full name
                </label>
                <input
                  id="signup-name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-[#E5E7EB] px-4 py-3 text-sm outline-none transition focus:border-[#DF6951] focus:ring-2 focus:ring-[#DF6951]/20"
                />
              </div>

              <div>
                <label htmlFor="signup-email" className="mb-2 block text-sm font-medium text-[#181E4B]">
                  Email
                </label>
                <input
                  id="signup-email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-2xl border border-[#E5E7EB] px-4 py-3 text-sm outline-none transition focus:border-[#DF6951] focus:ring-2 focus:ring-[#DF6951]/20"
                />
              </div>

              <div>
                <label htmlFor="signup-password" className="mb-2 block text-sm font-medium text-[#181E4B]">
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  placeholder="Create a password"
                  className="w-full rounded-2xl border border-[#E5E7EB] px-4 py-3 text-sm outline-none transition focus:border-[#DF6951] focus:ring-2 focus:ring-[#DF6951]/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-[#DF6951] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c85f49]"
              >
                Sign up
              </button>
            </form>

            <p className="mt-6 text-sm text-[#5E6282]">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-[#181E4B] hover:underline">
                Login
              </Link>
            </p>
          </section>

          <section className="bg-[#FFF1DA] px-8 py-10 md:px-12 md:py-14">
            <Link href="/" className="text-3xl font-black tracking-tight text-[#181E4B]">
              Jadoo
            </Link>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-[#DF6951]">
              Join us
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#181E4B]">
              Start booking brighter travel experiences.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#5E6282]">
              This is a clean starter signup screen. Later, we can add validation, Supabase auth, or API integration.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <p className="text-2xl font-black text-[#181E4B]">24/7</p>
                <p className="mt-1 text-sm text-[#5E6282]">Support for your journey</p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <p className="text-2xl font-black text-[#181E4B]">500+</p>
                <p className="mt-1 text-sm text-[#5E6282]">Happy travelers inspired</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
