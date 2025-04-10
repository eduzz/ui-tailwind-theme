function App() {
  return (
    <main className='h-screen w-full overflow-auto bg-surface-default'>
      <header className='flex w-full justify-end p-4'>
        <button
          className='rounded-sm bg-primary px-2 py-1 text-content-negative dark:bg-secondary'
          onClick={() => {
            const body = document.querySelector('body');

            if (!body) {
              return;
            }

            const currentTheme = body.getAttribute('data-eduzz-theme');

            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-eduzz-theme', newTheme);
          }}
        >
          Trocar temas
        </button>
      </header>
      <section>
        <div className='block bg-surface-subtle p-4'>
          <p className='text-primary dark:text-secondary'>Esse texto muda de cor com o tema</p>
          <p className='mt-2 text-content-body'>
            Esse lorem isum dolor sit amet consectur também mas sem o <code>dark:</code>
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
