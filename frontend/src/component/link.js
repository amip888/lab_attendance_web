import React from 'react';
// import React, { useEffect } from 'react';

const LinkComponent = () => {
    return (
        <div>
            <h3>Home Page <a id="myLink" href="https://amip888.github.io/lab_attendance_web" target="_system">click here</a></h3>
            <h3>Detail Page <a id="myLink" href="https://amip888.github.io/lab_attendance_web/detail" target="_system">click here</a></h3>
        </div>
    );
};

// const LinkComponent = () => {
//     // useEffect(() => {
//     //     // Membuat elemen <a> dinamis menggunakan JavaScript
//     //     const link = document.createElement('a');
//     //     link.textContent = 'Applink';
//     //     link.href = 'https://amip888.github.io/lab_attendance_web';
//     //     link.target = '_system';
//     //     // link.target = '_blank'; // Agar link terbuka di tab baru

//     //     // Menambahkan link ke dalam div dengan id 'dynamicLinkContainer'
//     //     document.getElementById('dynamicLinkContainer').appendChild(link);
//     // }, []); // Empty array ensures the effect runs only once

//     return (
//         <div>
//             <h3>Dynamic Link Component</h3>
//             {/* <div id="dynamicLinkContainer"></div> Container untuk link dinamis */}

//             <a id="myLink" href="https://amip888.github.io/lab_attendance_web" target="_system">Applink</a>
//             <button id="myButton" wi>Go to Google</button>
//         </div>
//     );
// };

export default LinkComponent;
