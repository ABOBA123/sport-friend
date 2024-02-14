function IsActive() {
    const firstProposal = document.getElementById('first-proposal');
    const secondProposal = document.getElementById('second-proposal');
    const firstText = document.getElementById('first-text');
    const secondText = document.getElementById('second-text');

    firstProposal.addEventListener('click', () => {
        if (!firstProposal.classList.contains('active-table')) {
            firstProposal.classList.add('active-table');
            secondProposal.classList.remove('active-table');

            let textContent = secondText.dataset.fullText || secondText.textContent;
            let trimmedText = textContent.substring(0, 200) + '...';
            secondText.textContent = trimmedText;
        }
    });

    secondProposal.addEventListener('click', () => {
        if (!secondProposal.classList.contains('active-table')) {
            secondProposal.classList.add('active-table');
            firstProposal.classList.remove('active-table');

            let textContent = firstText.dataset.fullText || firstText.textContent;
            let trimmedText = textContent.substring(0, 200) + '...';
            firstText.textContent = trimmedText;
        }
    });
}

IsActive();
