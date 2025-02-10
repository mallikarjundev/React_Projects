export default function TimeChallenge({ title, tagetTime }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {tagetTime} second{tagetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>Start Challenge</button>
      </p>
      <p className="">Time is running... / Timer inactive</p>
    </section>
  );
}
