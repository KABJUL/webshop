
"use client";

export default function CheckoutForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Contact information */}
      <section className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-6 text-xl font-bold text-gray-900">
          Contact information
        </h2>

        <div className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              pattern="[+0-9() /-]{6,30}"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-amber-500"
            />
          </div>
        </div>
      </section>

      {/* Shipping address */}
      <section className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-6 text-xl font-bold text-gray-900">
          Shipping address
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label
              htmlFor="postalCode"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Postal code
            </label>
            <input
              id="postalCode"
              name="postalCode"
              type="text"
              autoComplete="postal-code"
              inputMode="numeric"
              pattern="[0-9]{4}"
              maxLength={4}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label
              htmlFor="city"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-amber-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="street"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Street and house number
            </label>
            <input
              id="street"
              name="street"
              type="text"
              autoComplete="street-address"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-amber-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="addressDetails"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Apartment, floor, etc. (optional)
            </label>
            <input
              id="addressDetails"
              name="addressDetails"
              type="text"
              autoComplete="address-line2"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-amber-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="country"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Country
            </label>
            <input
              id="country"
              name="country"
              type="text"
              value="Hungary"
              readOnly
              className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 text-gray-600"
            />
          </div>
        </div>
      </section>

      <button
        type="submit"
        className="w-full bg-[#f5a623] px-6 py-4 font-bold text-black transition-colors hover:bg-[#e89512]"
      >
        Continue to order review
      </button>
    </form>
  );
}
