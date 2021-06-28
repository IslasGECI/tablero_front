$(window).on("load", function () {
    $.getJSON("http://islasgeci.org:500/api/v1/dashboard", function (registros) {
        for (let registro of registros) {
            $("#tablero").append(`
            <tr>
                <td><b>${registro["repo"]}</b></td>
                <td><code>${registro["objetivo"]}</code></td>
                <td><img src="${registro["develop"]}" /></td>
                <td><img src="${registro["default"]}" /></td>
            </tr>
        `);
        }
    });
});
