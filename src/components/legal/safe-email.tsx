/** Renders an address with &#64; so Cloudflare Email Obfuscation does not rewrite links. */
export function SafeEmail({ email }: { email: string }) {
  const at = email.indexOf("@");
  if (at === -1) return <span>{email}</span>;

  const local = email.slice(0, at);
  const domain = email.slice(at + 1);

  return (
    <span>
      {local}
      <span aria-hidden="true">&#64;</span>
      {domain}
    </span>
  );
}
