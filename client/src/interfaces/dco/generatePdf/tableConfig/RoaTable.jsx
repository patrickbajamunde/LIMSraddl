export const RoaTableConfig = (title) => {
    const roaTable = {
        "": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO.', width: '6%' },
                { key: 'sampleNo', label: 'SAMPLE NO.', width: '9%' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID', width: '28%' },
                { key: 'address', label: 'ADDRESS', width: '15%' },
                { key: 'species', label: 'SPECIES', width: '10%' },
                { key: 'age', label: 'AGE', width: '9%' },
                { key: 'sex', label: 'SEX', width: '5%' },
                { key: 'result', label: 'RESULT', width: '18%' },
            ]
        },

        "FECALYSIS (FLOTATION AND SEDIMENTATION TECHNIQUE)": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO', width: '6%' },
                { key: 'sampleNo', label: 'SAMPLE NO', width: '9%' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID', width: '22%' },
                { key: 'address', label: 'ADDRESS', width: '13%' },
                { key: 'species', label: 'SPECIES', width: '10%' },
                { key: 'age', label: 'AGE', width: '7%' },
                { key: 'sex', label: 'SEX', width: '5%' },
                {
                    key: 'result', label: 'RESULT', width: '30%',
                    subColumns: [
                        { key: 'flotation', label: 'FLOTATION', width: '50%' },
                        { key: 'sedimentation', label: 'SEDIMENTATION', width: '50%' },
                    ]
                },
            ]
        },

        "INFECTIOUS LARYNGOTRACHEITIS VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO', width: '6%' },
                { key: 'sampleNo', label: 'SAMPLE NO', width: '9%' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID', width: '22%' },
                { key: 'address', label: 'ADDRESS', width: '13%' },
                { key: 'species', label: 'SPECIES', width: '10%' },
                { key: 'age', label: 'AGE', width: '7%' },
                { key: 'sex', label: 'SEX', width: '5%' },
                {
                    key: 'result', label: 'RESULT', width: '30%',
                    subColumns: [
                        { key: 'spRatio', label: 'S/P Ratio', width: '30%' },
                        { key: 'interpretation', label: 'INTERPRETATION', width: '70%' },
                    ]
                },
            ]
        },

        "INFLUENZA A VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO', width: '6%' },
                { key: 'sampleNo', label: 'SAMPLE NO', width: '9%' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID', width: '22%' },
                { key: 'address', label: 'ADDRESS', width: '13%' },
                { key: 'species', label: 'SPECIES', width: '10%' },
                { key: 'age', label: 'AGE', width: '7%' },
                { key: 'sex', label: 'SEX', width: '5%' },
                {
                    key: 'result', label: 'RESULT', width: '30%',
                    subColumns: [
                        { key: 'snRatio', label: 'S/N Ratio', width: '30%' },
                        { key: 'interpretation', label: 'INTERPRETATION', width: '70%' },
                    ]
                },
            ]
        },

        "CAPRINE ARTHRITIS ENCEPHALITIS VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO', width: '6%' },
                { key: 'sampleNo', label: 'SAMPLE NO', width: '9%' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID', width: '22%' },
                { key: 'address', label: 'ADDRESS', width: '13%' },
                { key: 'species', label: 'SPECIES', width: '10%' },
                { key: 'age', label: 'AGE', width: '7%' },
                { key: 'sex', label: 'SEX', width: '5%' },
                {
                    key: 'result', label: 'RESULT', width: '30%',
                    subColumns: [
                        { key: 'spRatio', label: 'S/P Ratio', width: '30%' },
                        { key: 'interpretation', label: 'INTERPRETATION', width: '70%' },
                    ]
                },
            ]
        },

        "INFECTIOUS BURSAL DISEASE VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO', width: '6%' },
                { key: 'sampleNo', label: 'SAMPLE NO', width: '9%' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID', width: '22%' },
                { key: 'address', label: 'ADDRESS', width: '13%' },
                { key: 'species', label: 'SPECIES', width: '10%' },
                { key: 'age', label: 'AGE', width: '7%' },
                { key: 'sex', label: 'SEX', width: '5%' },
                {
                    key: 'result', label: 'RESULT', width: '30%',
                    subColumns: [
                        { key: 'spRatio', label: 'S/P Ratio', width: '30%' },
                        { key: 'interpretation', label: 'INTERPRETATION', width: '70%' },
                    ]
                },
            ]
        },

        "Q FEVER (Coxiella burnetii) ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO', width: '6%' },
                { key: 'sampleNo', label: 'SAMPLE NO', width: '9%' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID', width: '22%' },
                { key: 'address', label: 'ADDRESS', width: '13%' },
                { key: 'species', label: 'SPECIES', width: '10%' },
                { key: 'age', label: 'AGE', width: '7%' },
                { key: 'sex', label: 'SEX', width: '5%' },
                {
                    key: 'result', label: 'RESULT', width: '30%',
                    subColumns: [
                        { key: 'spRatio', label: 'S/P Ratio', width: '30%' },
                        { key: 'interpretation', label: 'INTERPRETATION', width: '70%' },
                    ]
                },
            ]
        },

        "McMASTER COUNTING TECHNIQUE": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO.', width: '6%' },
                { key: 'sampleNo', label: 'SAMPLE NO.', width: '9%' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID', width: '28%' },
                { key: 'address', label: 'ADDRESS', width: '15%' },
                { key: 'species', label: 'SPECIES', width: '10%' },
                { key: 'age', label: 'AGE', width: '9%' },
                { key: 'sex', label: 'SEX', width: '5%' },
                { key: 'result', label: 'RESULT', width: '18%' },
            ]
        },

        "BRUCELLOSIS (Brucella abortus, Brucella melitensis, Brucella suis) ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO', width: '6%' },
                { key: 'sampleNo', label: 'SAMPLE NO', width: '9%' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID', width: '22%' },
                { key: 'address', label: 'ADDRESS', width: '13%' },
                { key: 'species', label: 'SPECIES', width: '10%' },
                { key: 'age', label: 'AGE', width: '7%' },
                { key: 'sex', label: 'SEX', width: '5%' },
                {
                    key: 'result', label: 'RESULT', width: '30%',
                    subColumns: [
                        { key: 'spRatio', label: 'S/P Ratio', width: '30%' },
                        { key: 'interpretation', label: 'INTERPRETATION', width: '70%' },
                    ]
                },
            ]
        },

        "NECROPSY": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO.', width: '6%' },
                { key: 'sampleNo', label: 'SAMPLE NO.', width: '9%' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID', width: '11%' },
                { key: 'address', label: 'ADDRESS', width: '13%' },
                { key: 'species', label: 'SPECIES', width: '10%' },
                { key: 'age', label: 'AGE', width: '9%' },
                { key: 'sex', label: 'SEX', width: '5%' },
                { key: 'result', label: 'RESULT', width: '40%' },
            ]
        },
        "CLINICAL HEMATOLOGY (Complete Blood Count)": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO', width: '6%' },
                { key: 'sampleNo', label: 'SAMPLE NO', width: '9%' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID', width: '9%' },
                {
                    key: 'result', label: 'RESULT', width: '76%',
                    subColumns: [
                        { key: 'packedCellVolume', label: 'PCV', width: '25%' },
                        { key: 'hemoglobin', label: 'HGB', width: '30%' },
                        { key: 'redBlood', label: 'RBC', width: '30%' },
                        { key: 'whiteBlood', label: 'WBC (X10³/µL)', width: '33%' },
                        { key: 'heterophils', label: 'H', width: '22%' },
                        { key: 'lymphocytes', label: 'L', width: '22%' },
                        { key: 'eosinophils', label: 'E', width: '22%' },
                        { key: 'monocytes', label: 'M', width: '22%' },
                        { key: 'basophils', label: 'B', width: '22%' },
                        { key: 'platelets', label: 'P/T', width: '30%' },

                    ]
                },
            ]
        },
        "BACTERIAL ISOLATION AND IDENTIFICATION": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO.', width: '6%' },
                { key: 'sampleNo', label: 'SAMPLE NO.', width: '9%' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID', width: '28%' },
                { key: 'address', label: 'ADDRESS', width: '15%' },
                { key: 'species', label: 'SPECIES', width: '10%' },
                { key: 'age', label: 'AGE', width: '9%' },
                { key: 'sex', label: 'SEX', width: '5%' },
                { key: 'result', label: 'RESULT', width: '18%' },
            ]
        },
        "BACTERIAL ISOLATION AND IDENTIFICATION - 2": {
            columns: [
                { key: 'itemNo', label: 'ITEM NO', width: '6%' },
                { key: 'sampleNo', label: 'SAMPLE NO', width: '9%' },
                { key: 'fieldSampleID', label: 'FIELD SAMPLE ID', width: '22%' },
                { key: 'address', label: 'ADDRESS', width: '13%' },
                { key: 'species', label: 'SPECIES', width: '10%' },
                { key: 'age', label: 'AGE', width: '7%' },
                { key: 'sex', label: 'SEX', width: '5%' },
                {
                    key: 'result', label: 'RESULT', width: '30%',
                    subColumns: [
                        { key: 'bacteCount', label: 'Bacterial Count', width: '50%' },
                        { key: 'bacteIdentified', label: 'Bacteria Identified', width: '50%' },
                    ]
                },
            ]
        },
    }

    return roaTable[title]?.columns ?? []
}


export const RoaDataRowConfig = (cell, fieldSampleID) => {
    const roaTable = {
        "": {
            rows: [
                { key: 'itemNo', width: '6%' },
                { key: 'sampleNo', width: '9%' },
                { key: 'fieldSampleID', width: fieldSampleID ? "5%" : "9%" },
                { key: 'nameOfOwner', width: fieldSampleID ? "23%" : "19%", skipRender: true },
                { key: 'address', width: '15%', skipRender: true },
                { key: 'species', width: '10%', color: '#2f5496', skipRender: true },
                { key: 'age', width: '9%' },
                { key: 'sex', width: '5%' },
                { key: 'result', width: '18%' },
            ]
        },

        "FECALYSIS (FLOTATION AND SEDIMENTATION TECHNIQUE)": {
            rows: [
                { key: 'itemNo', width: '5.89%' },
                { key: 'sampleNo', width: '8.83%' },
                { key: 'fieldSampleID', width: fieldSampleID ? "5%" : "9%" },
                { key: 'nameOfOwner', width: fieldSampleID ? "16.56%" : "12.56%", skipRender: true },
                { key: 'address', width: '12.77%', skipRender: true },
                { key: 'species', width: '9.8%', color: '#2f5496', skipRender: true },
                { key: 'age', width: '6.86%' },
                { key: 'sex', width: '4.9%' },
                { key: 'flotation', width: '14.65%' },
                { key: 'sedimentation', width: '14.8%' },
            ]
        },

        "INFECTIOUS LARYNGOTRACHEITIS VIRUS ANTIBODY DETECTION - ELISA": {
            rows: [
                { key: 'itemNo', width: '5.89%' },
                { key: 'sampleNo', width: '8.83%' },
                { key: 'fieldSampleID', width: fieldSampleID ? "5%" : "9%" },
                { key: 'nameOfOwner', width: fieldSampleID ? "16.56%" : "12.56%", skipRender: true },
                { key: 'address', width: '12.77%', skipRender: true },
                { key: 'species', width: '9.8%', color: '#2f5496', skipRender: true },
                { key: 'age', width: '6.86%' },
                { key: 'sex', width: '4.9%' },
                { key: 'spRatio', width: '8.76%' },
                { key: 'interpretation', width: '20.64%' },
            ]
        },
        "INFLUENZA A VIRUS ANTIBODY DETECTION - ELISA": {
            rows: [
                { key: 'itemNo', width: '5.89%' },
                { key: 'sampleNo', width: '8.83%' },
                { key: 'fieldSampleID', width: fieldSampleID ? "5%" : "9%" },
                { key: 'nameOfOwner', width: fieldSampleID ? "16.56%" : "12.56%", skipRender: true },
                { key: 'address', width: '12.77%', skipRender: true },
                { key: 'species', width: '9.77%', color: '#2f5496', skipRender: true },
                { key: 'age', width: '6.86%' },
                { key: 'sex', width: '4.9%' },
                { key: 'snRatio', width: '8.76%' },
                { key: 'interpretation', width: '20.64%' },
            ]
        },

        "CAPRINE ARTHRITIS ENCEPHALITIS VIRUS ANTIBODY DETECTION - ELISA": {
            rows: [
                { key: 'itemNo', width: '5.89%' },
                { key: 'sampleNo', width: '8.83%' },
                { key: 'fieldSampleID', width: fieldSampleID ? "5%" : "9%" },
                { key: 'nameOfOwner', width: fieldSampleID ? "16.56%" : "12.56%", skipRender: true },
                { key: 'address', width: '12.77%', skipRender: true },
                { key: 'species', width: '9.77%', color: '#2f5496', skipRender: true },
                { key: 'age', width: '6.86%' },
                { key: 'sex', width: '4.9%' },
                { key: 'spRatio', width: '8.76%' },
                { key: 'interpretation', width: '20.64%' },
            ]
        },

        "INFECTIOUS BURSAL DISEASE VIRUS ANTIBODY DETECTION - ELISA": {
            rows: [
                { key: 'itemNo', width: '5.89%' },
                { key: 'sampleNo', width: '8.83%' },
                { key: 'fieldSampleID', width: fieldSampleID ? "5%" : "9%" },
                { key: 'nameOfOwner', width: fieldSampleID ? "16.56%" : "12.56%", skipRender: true },
                { key: 'address', width: '12.77%', skipRender: true },
                { key: 'species', width: '9.77%', color: '#2f5496', skipRender: true },
                { key: 'age', width: '6.86%' },
                { key: 'sex', width: '4.9%' },
                { key: 'spRatio', width: '8.76%' },
                { key: 'interpretation', width: '20.64%' },
            ]
        },

        "Q FEVER (Coxiella burnetii) ANTIBODY DETECTION - ELISA": {
            rows: [
                { key: 'itemNo', width: '5.89%' },
                { key: 'sampleNo', width: '8.83%' },
                { key: 'fieldSampleID', width: fieldSampleID ? "5%" : "9%" },
                { key: 'nameOfOwner', width: fieldSampleID ? "16.56%" : "12.56%", skipRender: true },
                { key: 'address', width: '12.77%', skipRender: true },
                { key: 'species', width: '9.77%', color: '#2f5496', skipRender: true },
                { key: 'age', width: '6.86%' },
                { key: 'sex', width: '4.9%' },
                { key: 'spRatio', width: '8.76%' },
                { key: 'interpretation', width: '20.64%' },
            ]
        },

        "McMASTER COUNTING TECHNIQUE": {
            rows: [
                { key: 'itemNo', width: '6%' },
                { key: 'sampleNo', width: '9%' },
                { key: 'fieldSampleID', width: fieldSampleID ? "5%" : "9%" },
                { key: 'nameOfOwner', width: fieldSampleID ? "23%" : "19%", skipRender: true },
                { key: 'address', width: '15%', skipRender: true },
                { key: 'species', width: '10%', color: '#2f5496', skipRender: true },
                { key: 'age', width: '9%' },
                { key: 'sex', width: '5%' },
                { key: 'result', width: '18%' },
            ]
        },

        "BRUCELLOSIS (Brucella abortus, Brucella melitensis, Brucella suis) ANTIBODY DETECTION - ELISA": {
            rows: [
                { key: 'itemNo', width: '5.89%' },
                { key: 'sampleNo', width: '8.83%' },
                { key: 'fieldSampleID', width: fieldSampleID ? "5%" : "9%" },
                { key: 'nameOfOwner', width: fieldSampleID ? "16.56%" : "12.56%", skipRender: true },
                { key: 'address', width: '12.77%', skipRender: true },
                { key: 'species', width: '9.77%', color: '#2f5496', skipRender: true },
                { key: 'age', width: '6.86%' },
                { key: 'sex', width: '4.9%' },
                { key: 'spRatio', width: '8.76%' },
                { key: 'interpretation', width: '20.64%' },
            ]
        },

        "CLINICAL HEMATOLOGY (Complete Blood Count)": {
            rows: [
                { key: 'itemNo', width: '6%' },
                { key: 'sampleNo', width: '9%' },
                { key: 'fieldSampleID', width: "9%" },
                { key: 'packedCellVolume', width: '7.35%' },
                { key: 'hemoglobin', width: '8.82%' },
                { key: 'redBlood', width: '8.82%' },
                { key: 'whiteBlood', width: '9.68%' },
                { key: 'heterophils', width: '6.48%' },
                { key: 'lymphocytes', width: '6.48%' },
                { key: 'eosinophils', width: '6.48%' },
                { key: 'monocytes', width: '6.48%' },
                { key: 'basophils', width: '6.48%' },
                { key: 'platelets', width: '9%' },
            ]
        },

        "BACTERIAL ISOLATION AND IDENTIFICATION": {
            rows: [
                { key: 'itemNo', width: '6%' },
                { key: 'sampleNo', width: '9%' },
                { key: 'fieldSampleID', width: fieldSampleID ? "5%" : "9%" },
                { key: 'nameOfOwner', width: fieldSampleID ? "23%" : "19%", skipRender: true },
                { key: 'address', width: '15%', skipRender: true },
                { key: 'species', width: '10%', color: '#2f5496', skipRender: true },
                { key: 'age', width: '9%' },
                { key: 'sex', width: '5%' },
                { key: 'result', width: '18%' },
            ]
        },

        "BACTERIAL ISOLATION AND IDENTIFICATION - 2": {
            rows: [
                { key: 'itemNo', width: '5.89%' },
                { key: 'sampleNo', width: '8.83%' },
                { key: 'fieldSampleID', width: fieldSampleID ? "5%" : "9%" },
                { key: 'nameOfOwner', width: fieldSampleID ? "16.56%" : "12.56%", skipRender: true },
                { key: 'address', width: '12.77%', skipRender: true },
                { key: 'species', width: '9.8%', color: '#2f5496', skipRender: true },
                { key: 'age', width: '6.86%' },
                { key: 'sex', width: '4.9%' },
                { key: 'bacteCount', width: '14.65%' },
                { key: 'bacteIdentified', width: '14.8%' },
            ]

        },

        "NECROPSY": {
            rows: [
                { key: 'itemNo', width: '5.8%' },
                { key: 'sampleNo', width: '8.8%' },
                { key: 'fieldSampleID', width: '10.7%' },
                { key: 'address', width: '12.6%', skipRender: true },
                { key: 'species', width: '9.7%', color: '#2f5496', skipRender: true },
                { key: 'age', width: '8.7%' },
                { key: 'sex', width: '4.9%' },
                { key: 'result', width: '40%', skipRender: true, height: 105 },
            ]
        },
    }

    return roaTable[cell]?.rows ?? []
}


export const OverlayConfig = (overlay, fieldSampleID) => {
    const overlayTable = {
        "": {
            columns: [
                { key: 'originalName', width: fieldSampleID ? '23%' : '19%', left: fieldSampleID ? '20%' : '24%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalAddress', width: '15%', left: '43%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalSpecies', width: '10%', left: '58%', color: '#2f5496', textAlign: 'center', position: 'absolute' }
            ]
        },
        "FECALYSIS (FLOTATION AND SEDIMENTATION TECHNIQUE)": {
            columns: [
                { key: 'originalName', width: fieldSampleID ? "16.56%" : "12.56%", left: fieldSampleID ? '19.72%' : '23.7%', color: '#2f5496', position: 'absolute' },
                { key: 'originalAddress', width: '12.75%', left: '36.27%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalSpecies', width: '9.78%', left: '49.03%', color: '#2f5496', textAlign: 'center', position: 'absolute' }
            ]
        },
        "INFECTIOUS LARYNGOTRACHEITIS VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'originalName', width: fieldSampleID ? "16.56%" : "12.56%", left: fieldSampleID ? '19.72%' : '23.7%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalAddress', width: '12.60%', left: '36.27%', borderRightWidth: 0, color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalSpecies', width: '9.64%', left: '49.05%', borderRightWidth: 0, color: '#2f5496', textAlign: 'center', position: 'absolute' }
            ]
        },

        "INFLUENZA A VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'originalName', width: fieldSampleID ? "16.56%" : "12.56%", left: fieldSampleID ? '19.72%' : '23.7%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalAddress', width: '12.77%', left: '36.27%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalSpecies', width: '9.77%', left: '49.05%', color: '#2f5496', textAlign: 'center', position: 'absolute' }
            ]
        },

        "CAPRINE ARTHRITIS ENCEPHALITIS VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'originalName', width: fieldSampleID ? "16.56%" : "12.56%", left: fieldSampleID ? '19.72%' : '23.7%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalAddress', width: '12.77%', left: '36.27%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalSpecies', width: '9.77%', left: '49.03%', color: '#2f5496', textAlign: 'center', position: 'absolute' }
            ]
        },

        "INFECTIOUS BURSAL DISEASE VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'originalName', width: fieldSampleID ? "16.56%" : "12.56%", left: fieldSampleID ? '19.72%' : '23.7%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalAddress', width: '12.77%', left: '36.27%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalSpecies', width: '9.77%', left: '49.03%', color: '#2f5496', textAlign: 'center', position: 'absolute' }
            ]
        },

        "Q FEVER (Coxiella burnetii) ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'originalName', width: fieldSampleID ? "16.56%" : "12.56%", left: fieldSampleID ? '19.72%' : '23.7%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalAddress', width: '12.77%', left: '36.27%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalSpecies', width: '9.77%', left: '49.03%', color: '#2f5496', textAlign: 'center', position: 'absolute' }
            ]
        },

        "McMASTER COUNTING TECHNIQUE": {
            columns: [
                { key: 'originalName', width: fieldSampleID ? '23%' : '19%', left: fieldSampleID ? '20%' : '24%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalAddress', width: '15%', left: '43%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalSpecies', width: '10%', left: '58%', color: '#2f5496', textAlign: 'center', position: 'absolute' }
            ]
        },

        "BRUCELLOSIS (Brucella abortus, Brucella melitensis, Brucella suis) ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'originalName', width: fieldSampleID ? "16.56%" : "12.56%", left: fieldSampleID ? '19.72%' : '23.7%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalAddress', width: '12.77%', left: '36.27%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalSpecies', width: '9.77%', left: '49.03%', color: '#2f5496', textAlign: 'center', position: 'absolute' }
            ]
        },

        "BACTERIAL ISOLATION AND IDENTIFICATION": {
            columns: [
                { key: 'originalName', width: fieldSampleID ? '23%' : '19%', left: fieldSampleID ? '20%' : '24%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalAddress', width: '15%', left: '43%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalSpecies', width: '10%', left: '58%', color: '#2f5496', textAlign: 'center', position: 'absolute' }
            ]
        },

        "BACTERIAL ISOLATION AND IDENTIFICATION - 2": {
            columns: [
                { key: 'originalName', width: fieldSampleID ? "16.56%" : "12.56%", left: fieldSampleID ? '19.72%' : '23.7%', color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalAddress', width: '12.58%', left: '36.27%', borderRightWidth: 0, color: '#2f5496', textAlign: 'center', position: 'absolute' },
                { key: 'originalSpecies', width: '9.78%', left: '49.03%', color: '#2f5496', textAlign: 'center', position: 'absolute' }
            ]

        },

        "NECROPSY": {
            columns: [
                //{ key: 'originalAddress', width: '12.47%', left: '25.23%', borderRightWidth: 0, color: '#2f5496', textAlign: 'center' },
                //{ key: 'originalSpecies', width: '9.70%', left: '37.87%', color: '#2f5496', textAlign: 'center' },
                { key: 'originalResult', width: '38.86%', left: '61.15%', position: 'absolute' }
            ]

        }
    }

    return overlayTable[overlay]?.columns ?? []
}

export const InterpretDataTableConfig = (value) => {
    const intepretTable = {
        "": {
            columns: [
                { key: 'result', width: '15%' },
                { key: 'status', width: '21%' }
            ]
        },
        "INFECTIOUS LARYNGOTRACHEITIS VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'result', width: '15%' },
                { key: 'status', width: '21%' }
            ]
        },
        "CAPRINE ARTHRITIS ENCEPHALITIS VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'result', width: '25%' },
                { key: 'status', width: '25%' }
            ]
        },
        "INFECTIOUS BURSAL DISEASE VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'result', width: '15%' },
                { key: 'status', width: '21%' }
            ]
        },
        "Q FEVER (Coxiella burnetii) ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'result', width: '25%' },
                { key: 'status', width: '25%' }
            ]
        },
        "BRUCELLOSIS (Brucella abortus, Brucella melitensis, Brucella suis) ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'result', width: '25%' },
                { key: 'status', width: '25%' }
            ]
        },
        "CLINICAL HEMATOLOGY (Complete Blood Count)": {
            columns: [
                { key: 'result', width: '23%' },
                { key: 'status', width: '18%' }
            ]
        },

        "INFLUENZA A VIRUS ANTIBODY DETECTION - ELISA": {
            columns: [
                { key: 'result', width: '15%' },
                { key: 'status', width: '21%' },
            ]
        },
    }
    return intepretTable[value]?.columns ?? []
}