import { useRouter } from "next/router";

export default function EventSinglePage() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h3>this is evetn single page </h3>
      <h2>{router.query.slug}</h2>
      <button onClick={() => router.push("/")}>Click me</button>
    </div>
  );
}
