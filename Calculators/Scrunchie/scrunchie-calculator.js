function calculatePattern() {

    // Get gauge
    const stitchesPer10 = parseFloat(
        document.getElementById("stitches").value
    );

    const rowsPer10 = parseFloat(
        document.getElementById("rows").value
    );


    // Get selected sizes
    const selectedInputs = document.querySelectorAll(
        'input[name="size"]:checked'
    );


    // Validate input
    if (
        isNaN(stitchesPer10) ||
        isNaN(rowsPer10) ||
        selectedInputs.length === 0
    ) {

        alert("Please enter your gauge and select a size.");

        return;
    }


    // Determine selected sizes
    let selectedSizes = [];


    selectedInputs.forEach(function(input) {

        if (input.value === "ALL") {

            selectedSizes = ["S", "M", "L"];

        } else {

            selectedSizes.push(input.value);

        }

    });


    // Remove duplicates
    selectedSizes = [...new Set(selectedSizes)];


    // Calculate results
    const results = [];


    selectedSizes.forEach(function(size) {

        const dimensions =
            scrunchieConfig.sizes[size];


        // Width → stitches
        let stitches =
            stitchesPer10 *
            dimensions.width /
            10;


        // Round stitches to nearest even number
        stitches =
            Math.round(stitches / 2) * 2;


        // Length → rows
        let rows =
            rowsPer10 *
            dimensions.length /
            10;


        // Round rows to whole number
        rows =
            Math.round(rows);


        results.push({

            size: size,

            length: dimensions.length,

            width: dimensions.width,

            stitches: stitches,

            rows: rows

        });

    });


    // Display the results
    displayResults(results);

}


function displayResults(results) {

    const step1 =
        document.getElementById("step-1");

    const step2 =
        document.getElementById("step-2");

    const step3 =
        document.getElementById("step-3");


    // Step 1
    step1.innerHTML =
        results.map(function(result) {

            return `
                <strong>${result.size}</strong>:
                Cast on ${result.stitches} stitches.
            `;

        }).join("<br>");


    // Step 2
    step2.innerHTML =
        results.map(function(result) {

            return `
                <strong>${result.size}</strong>:
                Knit ${result.rows} rows.
            `;

        }).join("<br>");


    // Step 3
    step3.innerHTML =
        "Insert the hair tie and wrap the knitted piece around it. " +
        "Join the ends using Kitchener stitch.";


    // Scroll to results
    document.getElementById("results").scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}
