module.exports = [
  {
    label: 'All U.S. Supreme Court Opinions',
    showBnaLogo: false,
    folder: false,
    browsable: false,
    treePath: [],
    id: '105.293617',
    contentCoverage: {
      citationFormat: 'Volume Series Page',
      contents: 'U.S. Reports Vol. 2 to Current \nVol. 1 and part of Vol. 2 of U.S. Reports are found in Pennsylvania Cases',
      coverageType: 'COVERAGE_Y_TO_CURRENT',
      dateFormat: 'Decided date on document',
      description: 'US Supreme Court opinions from 1789 to current.  The Supreme Court of the United States was created by authority of the Judiciary Act of 1789 in accordance with Article III, Section 1 of the United States Constitution. The Court is comprised of a Chief Justice and eight Associate Justices appointed for life by the President of the United States with the advice and consent of the Senate. The Supreme Court convenes on the first Monday of October annually and continues in session generally through late June or early July. The Court exercises original jurisdiction over conflicts in which a state is a party or that involve ambassadors, public ministers and consuls. It also serves as the highest appellate tribunal in the country for cases and controversies emanating from the Constitution and statutes.',
      fileTypes: 'XML,PDF',
      frequency: null,
      from: '01-01-1791',
      to: '12-31-3000',
      formattedDate: '1791 to Current',
    },
    children: [
      {
        id: '1',
        label: 'alpha',
        children: [
          {
            id: '1.1',
            label: 'alpha1',
          },
          {
            id: '1.2',
            label: 'alpha2',
          },
        ],
      },
      {
        id: '2',
        label: 'beta',
      },
    ],
    attributes: null,
    displayName: 'U.S. Supreme Court Opinions',
    groupNameId: '105.110047',
  },
  // {
  //   label: 'All Federal \u0026 State Court Opinions',
  //   showBnaLogo: false,
  //   folder: false,
  //   browsable: false,
  //   treePath: [],
  //   id: '105.100061',
  //   contentCoverage: {
  //     citationFormat: null,
  //     contents: null,
  //     coverageType: 'COVERAGE_CURRENT',
  //     dateFormat: 'Date of opinion',
  //     description: 'The Combined US Federal \u0026 State Court Opinions database features US federal (1789 to current) and state court (1755 to current) opinions.',
  //     fileTypes: 'XML,PDF',
  //     frequency: null,
  //     from: '12-31-3000',
  //     to: '12-31-3000',
  //     formattedDate: 'Current',
  //   },
  //   children: [],
  //   attributes: null,
  //   displayName: 'All Federal \u0026 State Court Opinions',
  //   groupNameId: '105.100075',
  // }, {
  //   label: 'All Federal Court Opinions',
  //   showBnaLogo: false,
  //   folder: false,
  //   browsable: false,
  //   treePath: [],
  //   id: '105.100062',
  //   contentCoverage: {
  //     citationFormat: null,
  //     contents: null,
  //     coverageType: 'COVERAGE_Y_TO_CURRENT',
  //     dateFormat: null,
  //     description: 'Decisions issued by the United States Supreme Court, Circuit Courts of Appeals, District Courts, Bankruptcy Courts, Bankruptcy Appellate Panels, Tax Court, Court of Federal Claims, Court of International Trade and other federal courts',
  //     fileTypes: 'XML,PDF',
  //     frequency: null,
  //     from: '01-01-1789',
  //     to: '12-31-3000',
  //     formattedDate: '1789 to Current',
  //   },
  //   children: [],
  //   attributes: null,
  //   displayName: 'All Federal Court Opinions',
  //   groupNameId: '105.100062',
  // }, {
  //   label: 'All State Court Opinions',
  //   showBnaLogo: false,
  //   folder: false,
  //   browsable: false,
  //   treePath: [],
  //   id: '105.100065',
  //   contentCoverage: {
  //     citationFormat: null,
  //     contents: null,
  //     coverageType: 'COVERAGE_Y_TO_CURRENT',
  //     dateFormat: null,
  //     description: 'Decisions issued by state level courts and courts from United States Territories',
  //     fileTypes: 'XML,PDF',
  //     frequency: null,
  //     from: '01-01-1755',
  //     to: '12-31-3000',
  //     formattedDate: '1755 to Current',
  //   },
  //   children: [],
  //   attributes: null,
  //   displayName: 'All State Court Opinions',
  //   groupNameId: '105.100065',
  // }, {
  //   label: 'All Federal Dockets',
  //   showBnaLogo: false,
  //   folder: false,
  //   browsable: false,
  //   treePath: [],
  //   id: '105.100066',
  //   contentCoverage: {
  //     citationFormat: null,
  //     contents: 'Federal court dockets from 2005 to current and open cases as of 2005',
  //     coverageType: 'COVERAGE_Y_TO_CURRENT',
  //     dateFormat: null,
  //     description: 'Records of proceedings for the federal courts of the United States from 2005 to current, including prior cases open as of 2005. Federal court dockets database includes dockets from the US Supreme Court, US Courts of Appeals, US District Courts, US Bankruptcy Courts and Bankruptcy Appellate Panels (BAP), US Court of Federal Claims, and US Court of International Trade.',
  //     fileTypes: 'XML,PDF',
  //     frequency: null,
  //     from: '01-01-2005',
  //     to: '12-31-3000',
  //     formattedDate: '2005 to Current',
  //   },
  //   children: [],
  //   attributes: null,
  //   displayName: 'All Federal Court Dockets',
  //   groupNameId: '105.100720',
  // }, {
  //   label: 'All State Dockets',
  //   showBnaLogo: false,
  //   folder: false,
  //   browsable: false,
  //   treePath: [],
  //   id: '105.100069',
  //   contentCoverage: {
  //     citationFormat: null,
  //     contents: null,
  //     coverageType: 'COVERAGE_CURRENT',
  //     dateFormat: null,
  //     description: 'Records of proceedings for state level courts from the United States (see specific state for coverage information)\n\n*Select coverage dates per each court',
  //     fileTypes: 'XML,PDF',
  //     frequency: null,
  //     from: '12-31-3000',
  //     to: '12-31-3000',
  //     formattedDate: 'Current',
  //   },
  //   children: [],
  //   attributes: null,
  //   displayName: 'All State Court Dockets \u0026 Case Information',
  //   groupNameId: '105.100894',
  // }, {
  //   label: 'All Federal Court Rules',
  //   showBnaLogo: false,
  //   folder: false,
  //   browsable: false,
  //   treePath: [],
  //   id: '105.293065',
  //   contentCoverage: {
  //     citationFormat: null,
  //     contents: null,
  //     coverageType: 'COVERAGE_CURRENT',
  //     dateFormat: 'Date of latest file update',
  //     description: 'The Federal Court Rules database includes rules for the US Supreme Court, US Circuit Courts of Appeal, US District Courts, US Bankruptcy Courts, as well the Federal Rules of Civil Procedure, Federal Rules of Criminal Procedure, Federal Rules of Appellate Procedure, Federal Rules of Evidence, US Tax Court Rules of Practice and Procedure, Rules of the US Court of Appeals for Veterans Claims, Rules of Procedure of the Judicial Panel on Multidistrict Litigation, Federal Sentencing Guidelines Manual, Federal Courts Miscellaneous Fee Schedules, and reports of the US Federal Courts Rules Committees.',
  //     fileTypes: 'XML,PDF',
  //     frequency: null,
  //     from: '12-31-3000',
  //     to: '12-31-3000',
  //     formattedDate: 'Current',
  //   },
  //   children: [],
  //   attributes: null,
  //   displayName: 'All Federal Court Rules',
  //   groupNameId: '105.283099',
  // }, {
  //   label: 'All State Court Rules',
  //   showBnaLogo: false,
  //   folder: false,
  //   browsable: false,
  //   treePath: [],
  //   id: '105.293066',
  //   contentCoverage: {
  //     citationFormat: null,
  //     contents: null,
  //     coverageType: 'COVERAGE_CURRENT',
  //     dateFormat: 'Date of latest file update',
  //     description: 'The All State Court Rules directory features an extensive collection of state and local court rules for all 50 states and the District of Columbia',
  //     fileTypes: 'XML,PDF',
  //     frequency: null,
  //     from: '12-31-3000',
  //     to: '12-31-3000',
  //     formattedDate: 'Current',
  //   },
  //   children: [],
  //   attributes: null,
  //   displayName: 'All State Court Rules',
  //   groupNameId: '105.293066',
  // }, {
  //   label: 'All Federal Jury Instructions',
  //   showBnaLogo: false,
  //   folder: false,
  //   browsable: false,
  //   treePath: [],
  //   id: '105.293068',
  //   contentCoverage: {
  //     citationFormat: null,
  //     contents: 'Collection of federal jury instructions',
  //     coverageType: 'COVERAGE_UNDEFINED',
  //     dateFormat: null,
  //     fileTypes: 'XML',
  //     frequency: null,
  //     from: null,
  //     to: null,
  //     formattedDate: '',
  //   },
  //   children: [],
  //   attributes: null,
  //   displayName: 'All Federal Jury Instructions',
  //   groupNameId: '105.102370',
  // }, {
  //   label: 'All State Jury Instructions',
  //   showBnaLogo: false,
  //   folder: false,
  //   browsable: false,
  //   treePath: [],
  //   id: '105.293067',
  //   contentCoverage: {
  //     citationFormat: null,
  //     contents: null,
  //     coverageType: 'COVERAGE_CURRENT',
  //     dateFormat: 'Date of latest file update',
  //     description: 'The All State Jury Instructions directory contains select Civil and Criminal Pattern Jury Instructions for a number of states, including New York, New Jersey, Delaware, Michigan, Illinois, etc.',
  //     fileTypes: 'XML,PDF',
  //     frequency: null,
  //     from: '12-31-3000',
  //     to: '12-31-3000',
  //     formattedDate: 'Current',
  //   },
  //   children: [],
  //   attributes: null,
  //   displayName: 'All State Jury Instructions',
  //   groupNameId: '105.102371',
  // }, {
  //   label: 'All Federal Court Briefs',
  //   showBnaLogo: false,
  //   folder: false,
  //   browsable: false,
  //   treePath: [],
  //   id: '105.293063',
  //   contentCoverage: null,
  //   children: [],
  //   attributes: null,
  //   displayName: 'All Federal Court Briefs',
  //   groupNameId: '105.293063',
  // }, {
  //   label: 'All Federal Pleadings \u0026 Briefs',
  //   showBnaLogo: false,
  //   folder: false,
  //   browsable: false,
  //   treePath: [],
  //   id: '105.100071',
  //   contentCoverage: {
  //     citationFormat: null,
  //     contents: null,
  //     coverageType: 'COVERAGE_MY_TO_CURRENT',
  //     dateFormat: 'Filed Date',
  //     description: 'Briefs filed in federal courts including United States Circuit Courts of Appeals, District Courts, Bankruptcy Courts and Bankruptcy Appellate Panels',
  //     fileTypes: 'XML,PDF',
  //     frequency: null,
  //     from: '06-01-1934',
  //     to: '12-31-3000',
  //     formattedDate: '06/1934 to Current',
  //   },
  //   children: [],
  //   attributes: null,
  //   displayName: 'All Federal Pleadings \u0026 Briefs',
  //   groupNameId: '105.100071',
  // }, {
  //   label: 'All Fed. \u0026 State Judgments',
  //   showBnaLogo: false,
  //   folder: false,
  //   browsable: false,
  //   treePath: [],
  //   id: '105.110035',
  //   contentCoverage: {
  //     citationFormat: null,
  //     contents: 'The All Fed. \u0026 State Judgments directory features select judgments and orders from US Federal and State courts',
  //     coverageType: 'COVERAGE_CURRENT',
  //     dateFormat: null,
  //     fileTypes: 'OTHER',
  //     frequency: null,
  //     from: '12-31-3000',
  //     to: '12-31-3000',
  //     formattedDate: 'Current',
  //   },
  //   children: [],
  //   attributes: null,
  //   displayName: 'All Federal \u0026 State Judgments',
  //   groupNameId: '105.110035',
  // }, {
  //   label: 'All Federal Judgments',
  //   showBnaLogo: false,
  //   folder: false,
  //   browsable: false,
  //   treePath: [],
  //   id: '105.110033',
  //   contentCoverage: {
  //     citationFormat: null,
  //     contents: 'The All Federal Judgments directory features select judgments and orders from US Federal courts',
  //     coverageType: 'COVERAGE_CURRENT',
  //     dateFormat: null,
  //     fileTypes: 'OTHER',
  //     frequency: null,
  //     from: '12-31-3000',
  //     to: '12-31-3000',
  //     formattedDate: 'Current',
  //   },
  //   children: [],
  //   attributes: null,
  //   displayName: 'All Federal Judgments',
  //   groupNameId: '105.110033',
  // }, {
  //   label: 'All State Judgments',
  //   showBnaLogo: false,
  //   folder: false,
  //   browsable: false,
  //   treePath: [],
  //   id: '105.110034',
  //   contentCoverage: {
  //     citationFormat: null,
  //     contents: 'The All State Judgments directory features select judgments and orders from US state courts',
  //     coverageType: 'COVERAGE_CURRENT',
  //     dateFormat: null,
  //     fileTypes: 'OTHER',
  //     frequency: null,
  //     from: '12-31-3000',
  //     to: '12-31-3000',
  //     formattedDate: 'Current',
  //   },
  //   children: [],
  //   attributes: null,
  //   displayName: 'All State Judgments',
  //   groupNameId: '105.110034',
  // },
]
