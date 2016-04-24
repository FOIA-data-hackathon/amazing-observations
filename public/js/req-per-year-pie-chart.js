 
$('#req-per-year-pie-chart').highcharts({
      chart: {
        backgroundColor: null,
        borderWidth: 0,
        plotBackgroundColor: null,
        plotShadow: false,
        plotBorderWidth: 0,
        type: 'pie'
      },
      navigation: {
        buttonOptions: {
          enabled: false
        }
      },
credits: {
            enabled: true,
            href: "http://www.foia.gov/",
            text: "foia.gov"
  },
      labels: {
        style: {
          fontSize: "2em"
        }
      },
"title": {
"text": "Number of FOIA Requests Per Department/Agency",
"style": {
"color": "#0000"
          }
      },
      tooltip: {
        pointFormat: "{point.y:,.0f}",
        style: {
          font: '"museo sans", Helvetica, Arial, sans-serif',
          // fontSize: "1em"
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: false,
          innerSize: '50%',
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            y: -6,
            
          }
        }
      },
      legend: {
        enabled: false
      },
      series: [{
        colorByPoint: true,
        data: [{
            name: 'Department of Agriculture',
                color: '#33CCFF',
                y: 19559
            },{name: 'Department of Commerce',
                color: '#33CCFF',
                y: 2163  
            },{name: 'Department of Defense',
                color: '#33CCFF',
                y: 56507
            },{name: 'Department of Education',
                color: '#33CCFF',
                y: 2315 
           },{name: 'Department of Energy',
                color: '#33CCFF',
                y:2445
           },{name: 'Department of Health and Human Services',
                color: '#33CCFF',
                y:45186
            },{name: 'Department of Homeland Security',
                color: '#33CCFF',
                y:348878           
           },{name: 'Department of Housing and Urban Development',
                color: '#33CCFF',
                y:2180
           },{name: 'Department of the Interior',
                color: '#33CCFF',
                y:6757
           },{name: 'Department of Justice',
                color: '#33CCFF',
                y:67825
           },{name: 'Department of Labor',
                color: '#33CCFF',
                y:17104
           },{name: 'Department of State',
                color: '#33CCFF',
                y:14002             
           },{name: 'Department of Transportation',
                color: '#33CCFF',
                y:12681
           },{name: 'Department of the Treasury',
                color: '#33CCFF',
                y:13987
           },{name: 'Department of Veterans Affairs',
                color: '#33CCFF',
                y:30436
           },{name: 'Administrative Conference of the United States',
                color: '#33CCFF',
                y:26
           },{name: 'U.S. Agency for International Development',
                color: '#33CCFF',
                y:305
           },{name: 'American Battle Monuments Commission',
                color: '#33CCFF',
                y:5           
           },{name: 'National Railroad Passenger Corporation (Amtrak)',
                color: '#33CCFF',
                y:182
           },{name: 'Armed Forces Retirement Home',
                color: '#33CCFF',
                y:13
           },{name: 'Broadcasting Board of Governors',
                color: '#33CCFF',
                y:48           
           },{name: 'Central Intelligence Agency',
                color: '#33CCFF',
                y:3181
           },{name: 'Chemical Safety and Hazard Investigation Board',
                color: '#33CCFF',
                y:30
           },{name: 'U.S. Commission on Civil Rights',
                color: '#33CCFF',
                y:22             
           },{name: 'Commodity Futures Trading Commission',
                color: '#33CCFF',
                y:204      
           },{name: 'Consumer Financial Protection Bureau',
                color: '#33CCFF',
                y:319
           },{name: 'U.S. Consumer Product Safety Commission',
                color: '#33CCFF',
                y:770             
           },{name: 'Corporation for National and Community Service',
                color: '#33CCFF',
                y:48
           },{name: 'Council of Inspectors General on Integrity and Efficiency',
                color: '#33CCFF',
                y:15
           },{name: 'Court Services and Offender Supervision Agency',
                color: '#33CCFF',
                y:525               
           },{name: 'Defense Nuclear Facilities Safety Board',
                color: '#33CCFF',
                y:20
           },{name: 'Environmental Protection Agency',
                color: '#33CCFF',
                y:11278
           },{name: 'Equal Employment Opportunity Commission',
                color: '#33CCFF',
                y:17481               
           },{name: 'Council on Environmental Quality',
                color: '#33CCFF',
                y:75
           },{name: 'Office of Management and Budget',
                color: '#33CCFF',
                y:163
           },{name: 'Office of National Drug Control Policy',
                color: '#33CCFF',
                y:47             
           },{name: 'Office of Science and Technology Policy',
                color: '#33CCFF',
                y:94
           },{name: 'Office of the United States Trade Representative',
                color: '#33CCFF',
                y:93
           },{name: 'Export-Import Bank of the U.S.',
                color: '#33CCFF',
                y:101                
           },{name: 'Farm Credit Administration',
                color: '#33CCFF',
                y:42
           },{name: 'Farm Credit System Insurance Corporation',
                color: '#33CCFF',
                y:11
           },{name: 'Federal Communications Commission',
                color: '#33CCFF',
                y:745             
           },{name: 'Federal Deposit Insurance Corporation',
                color: '#33CCFF',
                y:606
           },{name: 'Federal Election Commission',
                color: '#33CCFF',
                y:81
           },{name: 'Federal Energy Regulatory Commission',
                color: '#33CCFF',
                y:133              
           },{name: 'Federal Financial Institutions Council',
                color: '#33CCFF',
                y:23
           },{name: 'Federal Housing Finance Agency',
                color: '#33CCFF',
                y:161
           },{name: 'Federal Labor Relations Authority',
                color: '#33CCFF',
                y:85                
           },{name: 'Federal Maritime Commission',
                color: '#33CCFF',
                y:39
           },{name: 'Federal Mediation And Conciliation Service',
                color: '#33CCFF',
                y:57
           },{name: 'Federal Mine Safety and Health Review Commission',
                color: '#33CCFF',
                y:140             
           },{name: 'Federal Open Market Committee',
                color: '#33CCFF',
                y:41
           },{name: 'Board of Governors of the Federal Reserve System',
                color: '#33CCFF',
                y:770
           },{name: 'Federal Retirement Thrift Investment Board',
                color: '#33CCFF',
                y:12             
           },{name: 'Federal Trade Commission',
                color: '#33CCFF',
                y:1531
           },{name: 'U.S. General Services Administration',
                color: '#33CCFF',
                y:973
           },{name: 'Institute of Museum and Library Services',
                color: '#33CCFF',
                y:33               
           },{name: 'Inter-American Foundation',
                color: '#33CCFF',
                y:3
           },{name: 'Legal Services Corporation',
                color: '#33CCFF',
                y:49
           },{name: 'Merit Systems Protection Board',
                color: '#33CCFF',
                y:136              
           },{name: 'Millennium Challenge Corporation',
                color: '#33CCFF',
                y:41
           },{name: 'National Aeronautics and Space Administration',
                color: '#33CCFF',
                y:923
           },{name: 'National Archives and Records Administration',
                color: '#33CCFF',
                y:23591               
           },{name: 'National Capital Planning Commission',
                color: '#33CCFF',
                y:3
           },{name: 'National Credit Union Administration',
                color: '#33CCFF',
                y:86
           },{name: 'National Endowment for the Arts',
                color: '#33CCFF',
                y:58             
           },{name: 'National Endowment for the Humanities',
                color: '#33CCFF',
                y:61
           },{name: 'National Indian Gaming Commision',
                color: '#33CCFF',
                y:34
           },{name: 'National Labor Relations Board',
                color: '#33CCFF',
                y:3679            
           },{name: 'National Mediation Board',
                color: '#33CCFF',
                y:35
           },{name: 'National Science Foundation',
                color: '#33CCFF',
                y:298
           },{name: 'National Transportation Safety Board',
                color: '#33CCFF',
                y:394               
           },{name: 'U.S. Nuclear Regulatory Commission',
                color: '#33CCFF',
                y:586
           },{name: 'Occupational Safety and Health Review Commission',
                color: '#33CCFF',
                y:55
           },{name: 'Office of Government Ethics',
                color: '#33CCFF',
                y:69             
           },{name: 'Office of Navajo and Hopi Indian Relocation',
                color: '#33CCFF',
                y:179
           },{name: 'Office of Personnel Management',
                color: '#33CCFF',
                y:10854
           },{name: 'Office of Special Counsel',
                color: '#33CCFF',
                y:115               
           },{name: 'Office of the Director of National Intelligence',
                color: '#33CCFF',
                y:321
           },{name: 'Overseas Private Investment Corporation',
                color: '#33CCFF',
                y:36
           },{name: 'Peace Corps',
                color: '#33CCFF',
                y:231               
           },{name: 'Pension Benefit Guaranty Corporation',
                color: '#33CCFF',
                y:2217
           },{name: 'Postal Regulatory Commission',
                color: '#33CCFF',
                y:8
           },{name: 'Privacy and Civil Liberties Oversight Board',
                color: '#33CCFF',
                y:12             
           },{name: 'Railroad Retirement Board',
                color: '#33CCFF',
                y:122
           },{name: 'U.S. Securities and Exchange Commission',
                color: '#33CCFF',
                y:16207
           },{name: 'Selective Service System',
                color: '#33CCFF',
                y:7               
           },{name: 'U.S. Small Business Administration',
                color: '#33CCFF',
                y:926
           },{name: 'Social Security Administration',
                color: '#33CCFF',
                y:22922
           },{name: 'Special Inspector General for Afghanistan Reconstruction',
                color: '#33CCFF',
                y:36             
           },{name: 'Surface Transportation Board',
                color: '#33CCFF',
                y:65
           },{name: 'Tennessee Valley Authority',
                color: '#33CCFF',
                y:195
           },{name: 'U.S. Access Board',
                color: '#33CCFF',
                y:11               
           },{name: 'U.S. African Development Foundation',
                color: '#33CCFF',
                y:2
           },{name: 'U.S. Copyright Office',
                color: '#33CCFF',
                y:34
           },{name: 'U.S. International Boundary and Water Commission',
                color: '#33CCFF',
                y:28            
           },{name: 'U.S. International Trade Commission',
                color: '#33CCFF',
                y:30
           },{name: 'U.S. Postal Service',
                color: '#33CCFF',
                y:2680
           },{name: 'United States Trade and Development Agency',
                color: '#33CCFF',
                y:6
        }]
      }]
});
