const Error404 = {
    render: async () => {
        return `
            <section>
                <h1>404 Error</h1>
            </section>
        `;
    },
    afterRender: async () => {}
};

export default Error404;