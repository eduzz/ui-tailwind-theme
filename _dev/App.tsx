function App() {
  return (
    <main className='bg-surface-default h-screen w-full overflow-auto'>
      <header className='flex w-full justify-end p-4'>
        <button
          className='bg-primary text-content-negative dark:bg-secondary rounded-xs px-2 py-1'
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
        <div className='bg-surface-subtle block p-4'>
          <p className='text-primary dark:text-secondary'>Esse texto muda de cor com o tema</p>
          <p className='text-content-body mt-2'>
            Esse lorem isum dolor sit amet consectur também mas sem o <code>dark:</code>
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
