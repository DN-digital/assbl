"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { contactCourses, formulaFromParam, site } from "@/lib/site";

type Status =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function Contact() {
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState<Status>({ type: "idle" });

  useEffect(() => {
    const applyFromUrl = () => {
      const value = new URLSearchParams(window.location.search).get("formule");
      const match = formulaFromParam(value);
      if (match) setCourse(match.title);
    };
    applyFromUrl();
    window.addEventListener("popstate", applyFromUrl);
    return () => window.removeEventListener("popstate", applyFromUrl);
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("website") || "").trim()) {
      setStatus({
        type: "error",
        message: "L’envoi n’a pas pu aboutir. Merci de réessayer.",
      });
      return;
    }

    setStatus({ type: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lastName: data.get("lastName"),
          firstName: data.get("firstName"),
          email: data.get("email"),
          phone: data.get("phone"),
          course: data.get("course"),
          message: data.get("message"),
          consent: data.get("consent") === "on",
        }),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          message:
            payload.message ||
            "L’envoi n’a pas pu aboutir. Merci de réessayer plus tard.",
        });
        return;
      }

      form.reset();
      const match = formulaFromParam(
        new URLSearchParams(window.location.search).get("formule"),
      );
      setCourse(match?.title ?? "");
      setStatus({
        type: "success",
        message:
          payload.message ||
          "Votre formulaire a bien été envoyé. Nous vous recontacterons rapidement.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Impossible d’envoyer le message pour le moment. Merci de réessayer.",
      });
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-medium tracking-wide text-coral">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Parlons de vos objectifs
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted">
            Indiquez-nous votre projet. Nous revenons vers vous pour échanger
            sur votre niveau, vos besoins et la préparation la plus adaptée.
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-sm font-medium">Adresse</dt>
              <dd className="mt-1 text-muted">
                {site.address.line1}
                <br />
                {site.address.postalCode} {site.address.city}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium">Téléphone</dt>
              <dd className="mt-1">
                <a
                  href={site.phoneHref}
                  className="text-muted hover:text-foreground"
                >
                  {site.phone}
                </a>
                <p className="mt-1 text-sm text-muted">{site.hours}</p>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium">E-mail</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="text-muted hover:text-foreground"
                >
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} className="bg-surface p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nom" name="lastName" autoComplete="family-name" required />
            <Field
              label="Prénom"
              name="firstName"
              autoComplete="given-name"
              required
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field
              label="E-mail"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <Field
              label="Téléphone (facultatif)"
              name="phone"
              type="tel"
              autoComplete="tel"
            />
          </div>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-medium">
              Formation souhaitée
            </span>
            <select
              name="course"
              required
              value={course}
              onChange={(event) => setCourse(event.target.value)}
              className="h-11 w-full rounded-[0.4rem] border border-black/10 bg-white px-3 text-foreground"
            >
              <option value="" disabled>
                Choisir
              </option>
              {contactCourses.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-medium">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full rounded-[0.4rem] border border-black/10 bg-white px-3 py-2.5 text-foreground"
            />
          </label>
          <div className="hidden" aria-hidden="true">
            <label>
              Site web
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <label className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-muted">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 h-4 w-4 accent-[#2a5bd7]"
            />
            <span>
              J’accepte qu’{site.name} utilise ces informations pour me
              recontacter au sujet de ma demande. Consultez la{" "}
              <Link
                href="/politique-de-confidentialite"
                className="font-medium text-coral underline-offset-2 hover:underline"
              >
                politique de confidentialité
              </Link>
              .
            </span>
          </label>
          {status.type === "error" || status.type === "success" ? (
            <p
              className="mt-4 text-sm text-foreground"
              role={status.type === "error" ? "alert" : "status"}
            >
              {status.message}
            </p>
          ) : null}
          <button
            type="submit"
            className="btn btn-coral mt-6"
            disabled={status.type === "loading"}
          >
            {status.type === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="h-11 w-full rounded-[0.4rem] border border-black/10 bg-white px-3 text-foreground"
      />
    </label>
  );
}
