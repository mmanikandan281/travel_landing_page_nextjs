import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff8ef_0%,#ffffff_45%,#fff4e8_100%)] px-6 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[32px] bg-white shadow-[0_30px_80px_rgba(24,30,75,0.12)] lg:grid-cols-[1.05fr_0.95fr]">
          <section className="bg-[#181E4B] px-8 py-10 text-white md:px-12 md:py-14">
            <Link href="/" className="text-3xl font-black tracking-tight">
              Jadoo
            </Link>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-[#F1A501]">
              Welcome back
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight">
              Login to continue your next trip plan.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
              This is a basic placeholder login screen. You can connect it to a real backend later.
            </p>
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-[#F1A501]">Demo Access</p>
              <p className="mt-3 text-sm leading-7 text-white/80">
                Use any email and password for now. The page is UI-only and does not submit data yet.
              </p>
            </div>
          </section>

          <section className="px-8 py-10 md:px-12 md:py-14">
            <h2 className="text-3xl font-black text-[#181E4B]">Login</h2>
            <p className="mt-2 text-sm text-[#5E6282]">
              Enter your details to access your account.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label htmlFor="login-email" className="mb-2 block text-sm font-medium text-[#181E4B]">
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-2xl border border-[#E5E7EB] px-4 py-3 text-sm outline-none transition focus:border-[#F1A501] focus:ring-2 focus:ring-[#F1A501]/20"
                />
              </div>

              <div>
                <label htmlFor="login-password" className="mb-2 block text-sm font-medium text-[#181E4B]">
                  Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-[#E5E7EB] px-4 py-3 text-sm outline-none transition focus:border-[#F1A501] focus:ring-2 focus:ring-[#F1A501]/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-[#F1A501] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d4910a]"
              >
                Login
              </button>
            </form>

            <p className="mt-6 text-sm text-[#5E6282]">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="font-semibold text-[#DF6951] hover:underline">
                Create one
              </Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
