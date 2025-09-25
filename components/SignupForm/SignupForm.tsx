const SignupForm = () => {
  return (
    <div>
      <h2>Укажіть свої дані</h2>
      <form action="sumbit">
        <input type="text" placeholder="Ім’я" />
        <input type="text" placeholder="Нік Telegram" />
        <input type="text" placeholder="Email*" />
        <button type="submit">Відправити</button>
      </form>
    </div>
  );
};

export default SignupForm;
