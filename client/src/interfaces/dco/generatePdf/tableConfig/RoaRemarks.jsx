export const RoaRemarsk = (testMethod) => {
    const remarks = {
        "INFECTIOUS BURSAL DISEASE VIRUS ANTIBODY DETECTION - ELISA": {
            remarks1: "The result is based on measurement uncertainty, considering both the value and its possible variation or error. Records of measurement uncertainty are available upon request.",
            remarks2: "Method of analysis is based on ELISA Kit Manufacturer’s recommendation, (ID Screen IBD Indirect).",
            remarks3: "Remarks:  This test measures the Immune status of the animal only and does not signify the presence of the disease. Non-specific positive reactions may occur because all ELISA for IBD are usually designed for vaccination  monitoring. (WOAH, Diagnostic test and Vaccines for Terrestrial Animals, thirteenth edition.",
            tableTitle: "Interpretation of Results",
            reference: "Reference/s:"
        },

        "INFECTIOUS LARYNGOTRACHEITIS VIRUS ANTIBODY DETECTION - ELISA": {
            remarks1: "The result is based on measurement uncertainty, considering both the value and its possible variation or error. Records of measurement uncertainty are available upon request.",
            remarks2: "Method of analysis is based on ELISA Kit Manufacturer’s recommendation, (ID Screen ILTgl Indirect).",
            tableTitle: "Interpretation of Results",
            reference: "Reference/s:"
        },

        "Q FEVER (Coxiella burnetii) ANTIBODY DETECTION - ELISA": {
            remarks2: "Method of analysis is based on ELISA Kit Manufacturer’s recommendation, (ID Screen Q Fever Indirect Multi-species Test Kit).",
            tableTitle: "Interpretation of Results",
            reference: "Reference/s:"
        },

        "BRUCELLOSIS (Brucella abortus, Brucella melitensis, Brucella suis) ANTIBODY DETECTION - ELISA": {
            remarks2: "Method of analysis is based on ELISA Kit Manufacturer’s recommendation, (ID Screen Brucellosis Indirect Multi-species Test Kit).",
            tableTitle: "Interpretation of Results",
            reference: "Reference/s:"
        },

        "CAPRINE ARTHRITIS ENCEPHALITIS VIRUS ANTIBODY DETECTION - ELISA": {
            remarks1: "The result is based on measurement uncertainty, considering both the value and its possible variation or error. Records of measurement uncertainty are available upon request.",
            remarks2: "Method of analysis is based on the ID Screen® IDVet MVV/CAEV Antibody Test Kit.",
            tableTitle: "Interpretation of Results",
            reference: "Reference/s:"
        },

        "INFLUENZA A VIRUS ANTIBODY DETECTION - ELISA": {
            remarks1: "The result is based on measurement uncertainty, considering both the value and its possible variation or error. Records of measurement uncertainty are available upon request.",
            remarks2: "Method of analysis is based on ELISA Kit Manufacturer’s recommendation, (IDEXX Influenza A Virus Antibody Test Kit). ",
            tableTitle: "Interpretation of Results",
            reference: "Reference/s:"
        }
    }
    return remarks[testMethod] || {};
}