import React from "react";

const Icon = (props) => {
    switch (props.name) {
        case "calendar":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-search"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
            );
        case "more-options":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-search"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="#000000"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
            );
        case "menu":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-menu-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            );
        case "map":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={props.color || "#000000"}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
            );
        case "speakerphone":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={props.color || "#000000"}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                </svg>
            );
        case "chart-bar":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={props.color || "#000000"}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
            );
        case "trending-down":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={props.color || "#000000"}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                </svg>
            );
        case "beaker":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={props.color || "#000000"}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
            );
        case "clipboard-list":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={props.color || "#000000"}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
            );
        case "cog":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={props.color || "#000000"}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            );
        case "logout":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#000000"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />

                </svg>
            );
        case "eco-power":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="0"
                    stroke="#000000"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M3.41719 3.65137L3.28125 3.78731V4.61231V5.43262L2.17032 5.44668C0.942191 5.46075 0.904691 5.47012 0.768754 5.75606C0.684379 5.93887 0.735941 6.16387 0.895316 6.30918C0.989066 6.39356 1.17657 6.39825 5.64375 6.40762C9.28594 6.417 10.3125 6.40762 10.4063 6.36075C10.4719 6.32793 10.5609 6.22481 10.6125 6.12637C10.6875 5.967 10.6922 5.9295 10.6313 5.77481C10.5188 5.46543 10.4016 5.43731 9.17813 5.43731H8.10938V4.66387C8.10938 3.67012 8.04375 3.51543 7.61719 3.51543C7.49063 3.51543 7.41094 3.55293 7.30782 3.65137L7.17188 3.78731V4.61231V5.43731H5.69532H4.21875V4.61231V3.78731L4.08282 3.65137C3.975 3.54356 3.90469 3.51543 3.75 3.51543C3.59532 3.51543 3.525 3.54356 3.41719 3.65137Z" fill="#FF7D1A" />
                    <path d="M19.1953 4.42002C18.8531 4.77158 18.0141 5.91064 17.5734 6.62314C16.8094 7.84658 16.2234 9.23408 16.0547 10.2044C15.9656 10.7153 15.9656 11.5966 16.0547 12.0231C16.1906 12.6841 16.6875 13.4856 17.2359 13.9356C17.7188 14.3294 18.3844 14.6435 18.9516 14.7372L19.125 14.77V12.4778C19.125 11.2169 19.1391 10.12 19.1531 10.0356C19.2 9.81064 19.3828 9.65596 19.6031 9.65596C19.8375 9.65596 19.95 9.71689 20.0391 9.89033C20.1 10.0075 20.1094 10.3731 20.1094 12.3981V14.77L20.2875 14.7372C21.9516 14.4372 23.1281 13.1341 23.2781 11.4372C23.4047 9.96064 22.5328 7.72002 21.0234 5.64346C20.4188 4.81846 19.9781 4.28408 19.8469 4.22314C19.5984 4.11064 19.4484 4.15752 19.1953 4.42002Z" fill="#FF7D1A" />
                    <path d="M1.82812 7.69667C1.82812 8.64355 1.9875 9.2998 2.36719 9.94667C2.925 10.8982 3.97969 11.6389 4.99219 11.7935L5.20313 11.8217V13.1576C5.20313 14.6248 5.24531 15.1732 5.41406 15.8435C6.00469 18.2107 8.01094 20.0295 10.4531 20.4185C10.8328 20.4795 11.2547 20.4889 12.8766 20.4701C14.6531 20.4514 14.8734 20.442 15.2344 20.3529C16.0547 20.156 16.7578 19.8514 17.4281 19.3967C17.9109 19.0685 18.5813 18.4123 18.9375 17.9154C19.4578 17.1935 19.9688 15.9701 19.9688 15.4592C19.9688 15.0982 19.6078 14.892 19.2703 15.0701C19.125 15.1404 19.1016 15.1967 18.9141 15.8201C18.6562 16.6732 18.1969 17.4279 17.5406 18.056C16.7859 18.7779 16.0172 19.1904 14.9531 19.4295C14.6719 19.4951 14.2781 19.5139 12.9703 19.5326C10.8234 19.5607 10.2609 19.4951 9.34219 19.1107C8.57813 18.7873 7.73438 18.1264 7.21406 17.442C6.89062 17.0154 6.49219 16.1904 6.34219 15.6326C6.22031 15.1732 6.21563 15.131 6.19688 13.4951L6.17813 11.8264L6.47344 11.7701C8.01094 11.4654 9.25781 10.1576 9.51094 8.57792C9.53906 8.40917 9.5625 8.01542 9.5625 7.69667V7.1248H5.69531H1.82812V7.69667Z" fill="#FF7D1A" />
                </svg>
            );
        case "chevron-right":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-left"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="#8E91A4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            );
        case "chevron-down":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-left"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#8E91A4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            );
        case "selector":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-left"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke={props.color || "#000000"}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                </svg>
            );
        case "x-mark":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-left"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke={props.color || "#000000"}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            );
        case "hand":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#000000"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                </svg>
            );
        case "exclamation":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#000000"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
            );
        case "arrow-up":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-left"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="#000000"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                </svg>
            );
        case "SCADA":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="0.8"
                    stroke="blue"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
            );
        case "chevron-up":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#000000"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
            );
        case "mini-turbine":
            return (
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.78084 0.360227C4.7973 0.337627 4.83616 0.306201 4.8672 0.290405C5.00617 0.219614 5.16744 0.295008 5.20991 0.450626C5.22222 0.495727 5.22788 0.967201 5.22793 1.95236L5.22803 3.38833L5.19101 3.37972C4.93433 3.32002 4.90045 3.31581 4.74775 3.32456C4.58275 3.33401 4.38712 3.38682 4.27571 3.45197C4.24515 3.46984 4.21675 3.48105 4.21259 3.4769C4.20843 3.47274 4.11682 3.33006 4.00901 3.15983C3.83257 2.8812 3.81301 2.84283 3.81297 2.77527C3.81294 2.71475 3.90379 2.47758 4.28191 1.55077C4.53985 0.918566 4.76437 0.382826 4.78084 0.360227Z" fill="#0B1C2C" />
                    <path d="M4.22034 4.1872C4.30574 4.01393 4.45924 3.88278 4.6345 3.83337C4.67674 3.82146 4.76776 3.81432 4.84209 3.8171C5.14711 3.82846 5.388 4.0347 5.45148 4.33882C5.47206 4.43741 5.4734 4.48052 5.45856 4.56569C5.38282 5.00012 4.9329 5.24332 4.5415 5.06141C4.40254 4.99685 4.28565 4.88386 4.22004 4.75078C4.17014 4.6495 4.16671 4.63147 4.16671 4.46929C4.16671 4.30692 4.17009 4.28917 4.22034 4.1872Z" fill="#0B1C2C" />
                    <path d="M5.92759 4.18851C5.91635 4.14377 5.88632 4.15521 6.51148 3.96601C6.65672 3.92205 6.65134 3.92246 6.72672 3.94938C6.78538 3.97032 8.63613 5.35838 8.75314 5.46919C8.82492 5.53716 8.85552 5.6158 8.84076 5.69439C8.82148 5.79713 8.70534 5.89925 8.6078 5.89925C8.55812 5.89925 5.7871 5.16157 5.76551 5.14259C5.75796 5.13595 5.77201 5.09849 5.79675 5.05935C5.86552 4.95053 5.93381 4.74623 5.95013 4.60044C5.96361 4.48022 5.95323 4.2905 5.92759 4.18851Z" fill="#0B1C2C" />
                    <path d="M0.818224 5.12465C0.849899 5.10901 1.49409 4.93015 2.24976 4.72719C3.00544 4.52424 3.63298 4.3573 3.64428 4.35621C3.65926 4.35478 3.66485 4.39156 3.66485 4.49132C3.66485 4.74388 3.75647 4.99294 3.92725 5.20463L4.00687 5.30333L3.76099 5.56842C3.62577 5.71421 3.49366 5.8446 3.4674 5.85816C3.44115 5.87172 3.39523 5.88281 3.36538 5.88281C3.31638 5.88281 1.04985 5.60247 0.892318 5.57693C0.80116 5.56214 0.711319 5.47087 0.695424 5.37689C0.679331 5.28174 0.736033 5.16527 0.818224 5.12465Z" fill="#0B1C2C" />
                    <path d="M3.96926 6.93973C4.11858 6.1484 4.24076 5.49426 4.24076 5.48609C4.24076 5.47792 4.26862 5.48543 4.30266 5.50279C4.45319 5.5795 4.60248 5.61161 4.80844 5.61161C5.01369 5.61161 5.16369 5.57948 5.31249 5.50366L5.37266 5.473L5.38247 5.52586L5.65668 6.98404C5.83801 7.94778 5.91876 8.41187 5.91369 8.46107C5.9049 8.54626 5.86488 8.60493 5.7872 8.64655C5.73386 8.67512 5.67436 8.67697 4.8087 8.67694C3.96403 8.67692 3.8822 8.67453 3.82973 8.64818C3.75272 8.60954 3.69776 8.52415 3.69776 8.44312C3.69776 8.40758 3.81993 7.73105 3.96926 6.93973Z" fill="#0B1C2C" />
                </svg>

            );
        case "mini-speaker":
            return (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8 1.8C10.8 1.69776 10.7738 1.59724 10.724 1.50796C10.6742 1.41868 10.6024 1.34362 10.5154 1.28988C10.4284 1.23615 10.3291 1.20553 10.227 1.20093C10.1249 1.19633 10.0233 1.2179 9.93181 1.2636L5.25781 3.6H3.00001C2.52262 3.6 2.06479 3.78964 1.72722 4.12721C1.38965 4.46477 1.20001 4.92261 1.20001 5.4C1.20001 5.87739 1.38965 6.33522 1.72722 6.67279C2.06479 7.01035 2.52262 7.2 3.00001 7.2H3.16801L4.23061 10.3896C4.27042 10.5091 4.34684 10.6131 4.44904 10.6867C4.55124 10.7604 4.67403 10.8 4.80001 10.8H5.40001C5.55914 10.8 5.71175 10.7368 5.82428 10.6243C5.9368 10.5117 6.00001 10.3591 6.00001 10.2V7.5708L9.93181 9.5364C10.0233 9.5821 10.1249 9.60367 10.227 9.59907C10.3291 9.59447 10.4284 9.56385 10.5154 9.51011C10.6024 9.45638 10.6742 9.38131 10.724 9.29203C10.7738 9.20276 10.8 9.10223 10.8 9V1.8Z" fill="#0B1C2C" />
                </svg>


            );
        case "mini-bolt":
            return (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 1.5V5H10L5.5 10.5V7H2L6.5 1.5Z" fill="#0B1C2C" />
                </svg>
            );
        case "avaliation":
            return (
                <svg width="42" height="20" viewBox="0 0 43 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 5.21387C19.3954 5.21387 18.5 6.1093 18.5 7.21387V19.4639H24.5V7.21387C24.5 6.1093 23.6046 5.21387 22.5 5.21387H20.5ZM9.5 9.58887C9.5 8.4843 10.3954 7.58887 11.5 7.58887H13.5C14.6046 7.58887 15.5 8.4843 15.5 9.58887V19.4639H9.5V9.58887ZM0.5 11.9639C0.5 10.8593 1.39543 9.96387 2.5 9.96387H4.5C5.60457 9.96387 6.5 10.8593 6.5 11.9639V19.4639H0.5V11.9639Z" fill="#FFDE54" />
                    <path d="M28 5C28 3.89543 28.8954 3 30 3H32C33.1046 3 34 3.89543 34 5V20H28V5Z" fill="#E5E9EE" />
                    <path d="M37 2C37 0.895431 37.8954 0 39 0H41C42.1046 0 43 0.895431 43 2V19H37V2Z" fill="#E5E9EE" />
                </svg>

            );
        default:
            return null;
    }
};

export default Icon;