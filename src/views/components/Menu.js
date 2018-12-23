const Menu = {
    render: () => {
        return `
            <nav class="navigation">
                <ul>
                    <li>
                        <a href="/#/" class="active">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/#/about">
                            About
                        </a>
                    </li>               
                </ul>
                
                
            </nav>
        `;
    },
    afterRender: () => {
        document.querySelector('.navigation').addEventListener('click', event => {
            let activeLink = event.currentTarget.querySelector('.navigation .active');
            if (activeLink !== event.target) {
                event.currentTarget.querySelector('.navigation .active').classList.remove('active');
                event.target.classList.add('active');
            }
        });
    }

};

export default Menu;