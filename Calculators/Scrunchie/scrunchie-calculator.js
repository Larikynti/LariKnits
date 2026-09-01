function calculatePattern() {

    // Get user inputs
    const stitchesPer10 = parseFloat(
        document.getElementById("stitches").value
    );

    const rowsPer10 = parseFloat(
        document.getElementById("rows").value
    );

    // Get selected sizes
    const selectedSizes = document.querySelectorAll(
        'input[name="size"]:checked'
    );

    // Check that all required information is entered
    if (
        isNaN(stitchesPer10) ||
        isNaN(rowsPer10) ||
        selectedSizes.length === 0
    ) {

        alert("Please enter your gauge and select a size.");

        return;
    }


    // Calculate each selected size
    selectedSizes.forEach(function(sizeInput) {

        const size = sizeInput.value;

        const dimensions = scrunchieConfig.sizes[size];

        // Calculate stitches from width
        let stitches =
            stitchesPer10 *
            dimensions.width /
            10;

        // Round to nearest even number
        stitches =
            Math.round(stitches / 2) * 2;


        // Calculate rows from length
        let rows =
            rowsPer10 *
            dimensions.length /
            10;

        // Round to nearest whole number
        rows =
            Math.round(rows);


        console.log(
            size,
            stitches,
            rows
        );

    });

}
