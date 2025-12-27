function Password() {
  return (
    <div className="p-4 bg-grey-800 flex justify-between items-center gap-4 sm:px-8">
      <p className="text-grey-700 text-2xl/8 sm:text-3xl/10">
        P4$5W0rD!
      </p>
      <button>
        <img src="./src/assets/images/icon-copy.svg" alt="copy" className="w-full" />
      </button>
    </div>
  );
}

Password.propTypes = {};

export default Password;
