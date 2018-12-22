const Menu = {
    render: async () => {
        return `
            <nav>
                <div>
                    <a href="/#/">
                        Home
                    </a>
                    <a href="/#/about">
                        About
                    </a>
                </div>
            </nav>
        `;
    },
    afterRender: async () => {}

};

export default Menu;