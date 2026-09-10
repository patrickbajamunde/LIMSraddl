export const TestMethods = (value) => {
    const methodTable = {
        "": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO.' },
                { key: 'sampleNo', label: 'SAMPLE NO.' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID' },
                { key: 'nameOfOwner', label: 'NAME OF OWNER' },
                { key: 'address', label: 'ADDRESS' },
                { key: 'species', label: 'SPECIES' },
                { key: 'age', label: 'AGE' },
                { key: 'sex', label: 'SEX' },
                { key: 'result', label: 'RESULT' },

            ]
        },

        'FECALYSIS (FLOTATION AND SEDIMENTATION TECHNIQUE)': {
            columns: [
                { key: 'itemNo', label: 'ITEM NO.' },
                { key: 'sampleNo', label: 'SAMPLE NO.' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID' },
                { key: 'nameOfOwner', label: 'NAME OF OWNER' },
                { key: 'address', label: 'ADDRESS' },
                { key: 'species', label: 'SPECIES' },
                { key: 'age', label: 'AGE' },
                { key: 'sex', label: 'SEX' },
                { key: 'flotation', label: 'FLOTATION' },
                { key: 'sedimentation', label: 'SEDIMENTATION' },
            ]
        },

        "McMASTER COUNTING TECHNIQUE": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO.' },
                { key: 'sampleNo', label: 'SAMPLE NO.' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID' },
                { key: 'nameOfOwner', label: 'NAME OF OWNER' },
                { key: 'address', label: 'ADDRESS' },
                { key: 'species', label: 'SPECIES' },
                { key: 'age', label: 'AGE' },
                { key: 'sex', label: 'SEX' },
                { key: 'result', label: 'RESULT' },
            ]
        },

        "INFECTIOUS LARYNGOTRACHEITIS VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO.' },
                { key: 'sampleNo', label: 'SAMPLE NO.' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID' },
                { key: 'nameOfOwner', label: 'NAME OF OWNER' },
                { key: 'address', label: 'ADDRESS' },
                { key: 'species', label: 'SPECIES' },
                { key: 'age', label: 'AGE' },
                { key: 'sex', label: 'SEX' },
                { key: 'spRatio', label: 'S/P Ratio' },
                { key: 'interpretation', label: 'INTEPRETATION' },

            ]
        },

        "INFLUENZA A VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO.' },
                { key: 'sampleNo', label: 'SAMPLE NO.' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID' },
                { key: 'nameOfOwner', label: 'NAME OF OWNER' },
                { key: 'address', label: 'ADDRESS' },
                { key: 'species', label: 'SPECIES' },
                { key: 'age', label: 'AGE' },
                { key: 'sex', label: 'SEX' },
                { key: 'snRatio', label: 'S/N Ratio' },
                { key: 'interpretation', label: 'INTEPRETATION' }
            ]
        },

        "CAPRINE ARTHRITIS ENCEPHALITIS VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO.' },
                { key: 'sampleNo', label: 'SAMPLE NO.' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID' },
                { key: 'nameOfOwner', label: 'NAME OF OWNER' },
                { key: 'address', label: 'ADDRESS' },
                { key: 'species', label: 'SPECIES' },
                { key: 'age', label: 'AGE' },
                { key: 'sex', label: 'SEX' },
                { key: 'spRatio', label: 'S/P Ratio' },
                { key: 'interpretation', label: 'INTEPRETATION' },
            ]
        },

        "CLINICAL HEMATOLOGY (Complete Blood Count)": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO.' },
                { key: 'sampleNo', label: 'SAMPLE NO.' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID' },
                { key: 'packedCellVolume', label: 'PCV' },
                { key: 'hemoglobin', label: 'HGB' },
                { key: 'redBlood', label: 'RBC' },
                { key: 'whiteBlood', label: 'WBC (X10³/µL)' },
                { key: 'heterophils', label: 'H' },
                { key: 'lymphocytes', label: 'L' },
                { key: 'eosinophils', label: 'E' },
                { key: 'monocytes', label: 'M' },
                { key: 'basophils', label: 'B' },
                { key: 'platelets', label: 'P/T' },
            ]
        },

        "INFECTIOUS BURSAL DISEASE VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO.' },
                { key: 'sampleNo', label: 'SAMPLE NO.' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID' },
                { key: 'nameOfOwner', label: 'NAME OF OWNER' },
                { key: 'address', label: 'ADDRESS' },
                { key: 'species', label: 'SPECIES' },
                { key: 'age', label: 'AGE' },
                { key: 'sex', label: 'SEX' },
                { key: 'spRatio', label: 'S/P Ratio' },
                { key: 'interpretation', label: 'INTEPRETATION' },
            ]
        },

        "NECROPSY": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO.' },
                { key: 'sampleNo', label: 'SAMPLE NO.' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID' },
                { key: 'address', label: 'ADDRESS' },
                { key: 'species', label: 'SPECIES' },
                { key: 'age', label: 'AGE' },
                { key: 'sex', label: 'SEX' },
                { key: 'result', label: 'RESULTS' },
            ]
        },

        "Q FEVER (Coxiella burnetii) ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO.' },
                { key: 'sampleNo', label: 'SAMPLE NO.' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID' },
                { key: 'nameOfOwner', label: 'NAME OF OWNER' },
                { key: 'address', label: 'ADDRESS' },
                { key: 'species', label: 'SPECIES' },
                { key: 'age', label: 'AGE' },
                { key: 'sex', label: 'SEX' },
                { key: 'spRatio', label: 'S/P Ratio' },
                { key: 'interpretation', label: 'INTEPRETATION' },
            ]
        },

        "BRUCELLOSIS (Brucella abortus, Brucella melitensis, Brucella suis) ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO.' },
                { key: 'sampleNo', label: 'SAMPLE NO.' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID' },
                { key: 'nameOfOwner', label: 'NAME OF OWNER' },
                { key: 'address', label: 'ADDRESS' },
                { key: 'species', label: 'SPECIES' },
                { key: 'age', label: 'AGE' },
                { key: 'sex', label: 'SEX' },
                { key: 'spRatio', label: 'S/P Ratio' },
                { key: 'interpretation', label: 'INTEPRETATION' },
            ]
        },

        "BACTERIAL ISOLATION AND IDENTIFICATION": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO.' },
                { key: 'sampleNo', label: 'SAMPLE NO.' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID' },
                { key: 'nameOfOwner', label: 'NAME OF OWNER' },
                { key: 'address', label: 'ADDRESS' },
                { key: 'species', label: 'SPECIES' },
                { key: 'age', label: 'AGE' },
                { key: 'sex', label: 'SEX' },
                { key: 'result', label: 'RESULTS' },
            ]
        },

        "BACTERIAL ISOLATION AND IDENTIFICATION - 2": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO.' },
                { key: 'sampleNo', label: 'SAMPLE NO.' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID' },
                { key: 'nameOfOwner', label: 'NAME OF OWNER' },
                { key: 'address', label: 'ADDRESS' },
                { key: 'species', label: 'SPECIES' },
                { key: 'age', label: 'AGE' },
                { key: 'sex', label: 'SEX' },
                { key: 'bacteCount', label: 'BACTERIAL COUNT' },
                { key: 'bacteIdentified', label: 'BACTERIAL IDENTIFIED' },
            ]
        }


    }

    return methodTable[value]?.columns ?? [];
}

export const ModalField = (value) => {
    const fieldTable = {
        "": {
            fields: [
                { key: 'result', label: 'Results' }
            ]
        },
        "CAPRINE ARTHRITIS ENCEPHALITIS VIRUS ANTIBODY DETECTION - ELISA": {
            fields: [
                { key: 'spRatio', label: 'S/P Ratio' },
                { key: 'interpretation', label: 'Interpretation' },
            ]
        },
        'FECALYSIS (FLOTATION AND SEDIMENTATION TECHNIQUE)': {
            fields: [
                { key: 'flotation', label: 'Flotation' },
                { key: 'sedimentation', label: 'Sedimentation' },
            ]
        },
        "McMASTER COUNTING TECHNIQUE": {
            fields: [
                { key: 'result', label: 'Result' },
            ]
        },

        "INFECTIOUS LARYNGOTRACHEITIS VIRUS ANTIBODY DETECTION - ELISA": {
            fields: [
                { key: 'spRatio', label: 'S/P Ratio' },
                { key: 'interpretation', label: 'Interpretation' }
            ]
        },

        "INFLUENZA A VIRUS ANTIBODY DETECTION - ELISA": {
            fields: [
                { key: 'snRatio', label: 'S/N Ratio' },
                { key: 'interpretation', label: 'Interpretation' }
            ]
        },

        "CLINICAL HEMATOLOGY (Complete Blood Count)": {
            fields: [
                { key: 'packedCellVolume', label: 'PCV' },
                { key: 'hemoglobin', label: 'HGB' },
                { key: 'redBlood', label: 'RBC' },
                { key: 'whiteBlood', label: 'WBC' },
                { key: 'heterophils', label: 'H' },
                { key: 'lymphocytes', label: 'L' },
                { key: 'eosinophils', label: 'E' },
                { key: 'monocytes', label: 'M' },
                { key: 'basophils', label: 'B' },
                { key: 'platelets', label: 'P/T' },
            ]
        },

        "INFECTIOUS BURSAL DISEASE VIRUS ANTIBODY DETECTION - ELISA": {
            fields: [
                { key: 'spRatio', label: 'S/P Ratio' },
                { key: 'interpretation', label: 'Interpretation' }
            ]
        },

        "NECROPSY": {
            fields: [
                { key: 'result', label: 'Result' },
            ]
        },

        "Q FEVER (Coxiella burnetii) ANTIBODY DETECTION - ELISA": {
            fields: [
                { key: 'spRatio', label: 'S/P Ratio' },
                { key: 'interpretation', label: 'Interpretation' }
            ]
        },

        "BRUCELLOSIS (Brucella abortus, Brucella melitensis, Brucella suis) ANTIBODY DETECTION - ELISA": {
            fields: [
                { key: 'spRatio', label: 'S/P Ratio' },
                { key: 'interpretation', label: 'Interpretation' }
            ]
        },

        "BACTERIAL ISOLATION AND IDENTIFICATION": {
            fields: [
                { key: 'result', label: 'Results' },
            ]
        },

        "BACTERIAL ISOLATION AND IDENTIFICATION - 2": {
            fields: [
                { key: 'bacteCount', label: 'Bacterial Count' },
                { key: 'bacteIdentified', label: 'Bacterial Identified' },
            ]
        }
    }
    return fieldTable[value]?.fields ?? [];
}

export const InterpretResults = (value) => {
    const interpretTable = {
        "": {
            columns: [
                { key: 'result', label: 'Results', width: '15%', paddingVertical: 5 },
                { key: 'status', label: 'Status', width: '21%', paddingVertical: 5 },
            ]
        },
        "INFECTIOUS LARYNGOTRACHEITIS VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'result', label: 'S/P Value', width: '15%', paddingVertical: 5 },
                { key: 'status', label: 'ILT Immune Status', width: '21%', paddingVertical: 5 },
            ]
        },
        "CAPRINE ARTHRITIS ENCEPHALITIS VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'result', label: 'Results', paddingVertical: 1, width: '25%' },
                { key: 'status', label: 'Status', paddingVertical: 1, width: '25%' },
            ]
        },
        "INFECTIOUS BURSAL DISEASE VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'result', label: 'S/P Value', width: '15%', paddingVertical: 5 },
                { key: 'status', label: 'IBD Immune Status', width: '21%', paddingVertical: 5 },
            ]
        },
        "Q FEVER (Coxiella burnetii) ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'result', label: 'Results', width: '25%', paddingVertical: 5 },
                { key: 'status', label: 'Status', width: '25%', paddingVertical: 5 },
            ]
        },
        "BRUCELLOSIS (Brucella abortus, Brucella melitensis, Brucella suis) ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'result', label: 'Results', width: '25%' },
                { key: 'status', label: 'Status', width: '25%' },
            ]
        },
        "CLINICAL HEMATOLOGY (Complete Blood Count)": {
            columns: [
                { key: 'result', label: 'Normal Values', width: '41%', paddingVertical: 1, colSpan: 2 },
                { key: 'status', width: '41%', paddingVertical: 1 },
            ]
        },

        "INFLUENZA A VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'result', label: 'Results', width: '15%', paddingVertical: 5 },
                { key: 'status', label: 'Status', width: '21%', paddingVertical: 5 },
            ]
        },
    }
    return interpretTable[value]?.columns ?? [];
}

export const InterpretResultsHeader = (value) => {
    const interpretTable = {
        "": {
            header: [
                { key: 'result', label: 'Results', width: '15%', paddingVertical: 5 },
                { key: 'status', label: 'Status', width: '21%', paddingVertical: 5 },
            ]
        },
        "INFECTIOUS LARYNGOTRACHEITIS VIRUS ANTIBODY DETECTION - ELISA": {
            header: [
                { key: 'result', label: 'S/P Value', width: '15%', paddingVertical: 5 },
                { key: 'status', label: 'ILT Immune Status', width: '21%', paddingVertical: 5 },
            ]
        },
        "CAPRINE ARTHRITIS ENCEPHALITIS VIRUS ANTIBODY DETECTION - ELISA": {
            header: [
                { key: 'result', label: 'Results', paddingVertical: 1, width: '25%' },
                { key: 'status', label: 'Status', paddingVertical: 1, width: '25%' },
            ]
        },
        "INFECTIOUS BURSAL DISEASE VIRUS ANTIBODY DETECTION - ELISA": {
            header: [
                { key: 'result', label: 'S/P Value', width: '15%', paddingVertical: 5 },
                { key: 'status', label: 'IBD Immune Status', width: '21%', paddingVertical: 5 },
            ]
        },
        "Q FEVER (Coxiella burnetii) ANTIBODY DETECTION - ELISA": {
            header: [
                { key: 'result', label: 'Results', width: '25%', paddingVertical: 5 },
                { key: 'status', label: 'Status', width: '25%', paddingVertical: 5 },
            ]
        },
        "BRUCELLOSIS (Brucella abortus, Brucella melitensis, Brucella suis) ANTIBODY DETECTION - ELISA": {
            header: [
                { key: 'result', label: 'Results', width: '25%' },
                { key: 'status', label: 'Status', width: '25%' },
            ]
        },
        "CLINICAL HEMATOLOGY (Complete Blood Count)": {
            header: [
                { key: 'result', label: 'Normal Values', width: '41%', paddingVertical: 1, colSpan: 2 },

            ]
        },

        "INFLUENZA A VIRUS ANTIBODY DETECTION - ELISA": {
            header: [
                { key: 'result', label: 'Avian Cutoff', paddingVertical: 5, colSpan: 2 },
            ]
        },
    }
    return interpretTable[value]?.header ?? [];
}