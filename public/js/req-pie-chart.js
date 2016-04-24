 
$('#req-pie-chart').highcharts({
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
"text": "FOIA Budget By Department/Agency",
"style": {
"color": "#0000"
          }
      },
      tooltip: {
        pointFormat: "${point.y:,.0f}",
        style: {
          font: '"museo sans", Helvetica, Arial, sans-serif',
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
                y: 10578232
            },{name: 'Department of Commerce',
                color: '#33CCFF',
                y: 15219439  
            },{name: 'Department of Defense',
                color: '#33CCFF',
                y: 71903054
            },{name: 'Department of Education',
                color: '#33CCFF',
                y: 4522359  
           },{name: 'Department of Energy',
                color: '#33CCFF',
                y:9856694
           },{name: 'Department of Health and Human Services',
                color: '#33CCFF',
                y:48575916
            },{name: 'Department of Homeland Security',
                color: '#33CCFF',
                y:51918433            
           },{name: 'Department of Housing and Urban Development',
                color: '#33CCFF',
                y:3571694
           },{name: 'Department of the Interior',
                color: '#33CCFF',
                y:11722357
           },{name: 'Department of Justice',
                color: '#33CCFF',
                y:62481252
           },{name: 'Department of Labor',
                color: '#33CCFF',
                y:15668723
           },{name: 'Department of State',
                color: '#33CCFF',
                y:29416609                
           },{name: 'Department of Transportation',
                color: '#33CCFF',
                y:9579702
           },{name: 'Department of the Treasury',
                color: '#33CCFF',
                y:18209435
           },{name: 'Department of Veterans Affairs',
                color: '#33CCFF',
                y:13178520
           },{name: 'Administrative Conference of the United States',
                color: '#33CCFF',
                y:41110
           },{name: 'U.S. Agency for International Development',
                color: '#33CCFF',
                y:2633813
           },{name: 'American Battle Monuments Commission',
                color: '#33CCFF',
                y:1750             
           },{name: 'National Railroad Passenger Corporation (Amtrak)',
                color: '#33CCFF',
                y:124400
           },{name: 'Armed Forces Retirement Home',
                color: '#33CCFF',
                y:31030
           },{name: 'Broadcasting Board of Governors',
                color: '#33CCFF',
                y:131570            
           },{name: 'Central Intelligence Agency',
                color: '#33CCFF',
                y:10968600
           },{name: 'Chemical Safety and Hazard Investigation Board',
                color: '#33CCFF',
                y:39043
           },{name: 'U.S. Commission on Civil Rights',
                color: '#33CCFF',
                y:35000               
           },{name: 'Commodity Futures Trading Commission',
                color: '#33CCFF',
                y:199200        
           },{name: 'Consumer Financial Protection Bureau',
                color: '#33CCFF',
                y:622290
           },{name: 'U.S. Consumer Product Safety Commission',
                color: '#33CCFF',
                y:893614              
           },{name: 'Corporation for National and Community Service',
                color: '#33CCFF',
                y:55686
           },{name: 'Council of Inspectors General on Integrity and Efficiency',
                color: '#33CCFF',
                y:1500
           },{name: 'Court Services and Offender Supervision Agency',
                color: '#33CCFF',
                y:217603               
           },{name: 'Defense Nuclear Facilities Safety Board',
                color: '#33CCFF',
                y:64376
           },{name: 'Environmental Protection Agency',
                color: '#33CCFF',
                y:9848226
           },{name: 'Equal Employment Opportunity Commission',
                color: '#33CCFF',
                y:2992976                
           },{name: 'Council on Environmental Quality',
                color: '#33CCFF',
                y:48000
           },{name: 'Office of Management and Budget',
                color: '#33CCFF',
                y:283465
           },{name: 'Office of National Drug Control Policy',
                color: '#33CCFF',
                y:50000               
           },{name: 'Office of Science and Technology Policy',
                color: '#33CCFF',
                y:112000
           },{name: 'Office of the United States Trade Representative',
                color: '#33CCFF',
                y:220000
           },{name: 'Export-Import Bank of the U.S.',
                color: '#33CCFF',
                y:373342                
           },{name: 'Farm Credit Administration',
                color: '#33CCFF',
                y:34255
           },{name: 'Farm Credit System Insurance Corporation',
                color: '#33CCFF',
                y:1000
           },{name: 'Federal Communications Commission',
                color: '#33CCFF',
                y:2842240              
           },{name: 'Federal Deposit Insurance Corporation',
                color: '#33CCFF',
                y:2041324
           },{name: 'Federal Election Commission',
                color: '#33CCFF',
                y:225746
           },{name: 'Federal Energy Regulatory Commission',
                color: '#33CCFF',
                y:555087               
           },{name: 'Federal Financial Institutions Council',
                color: '#33CCFF',
                y:8080
           },{name: 'Federal Housing Finance Agency',
                color: '#33CCFF',
                y:376414
           },{name: 'Federal Labor Relations Authority',
                color: '#33CCFF',
                y:23617                
           },{name: 'Federal Maritime Commission',
                color: '#33CCFF',
                y:331838
           },{name: 'Federal Mediation And Conciliation Service',
                color: '#33CCFF',
                y:80000
           },{name: 'Federal Mine Safety and Health Review Commission',
                color: '#33CCFF',
                y:112000              
           },{name: 'Federal Open Market Committee',
                color: '#33CCFF',
                y:145613
           },{name: 'Board of Governors of the Federal Reserve System',
                color: '#33CCFF',
                y:2044486
           },{name: 'Federal Retirement Thrift Investment Board',
                color: '#33CCFF',
                y:86351               
           },{name: 'Federal Trade Commission',
                color: '#33CCFF',
                y:728816
           },{name: 'U.S. General Services Administration',
                color: '#33CCFF',
                y:1124928
           },{name: 'Institute of Museum and Library Services',
                color: '#33CCFF',
                y:18245                
           },{name: 'Inter-American Foundation',
                color: '#33CCFF',
                y:10000
           },{name: 'Legal Services Corporation',
                color: '#33CCFF',
                y:46048
           },{name: 'Merit Systems Protection Board',
                color: '#33CCFF',
                y:238958              
           },{name: 'Millennium Challenge Corporation',
                color: '#33CCFF',
                y:15000
           },{name: 'National Aeronautics and Space Administration',
                color: '#33CCFF',
                y:1284127
           },{name: 'National Archives and Records Administration',
                color: '#33CCFF',
                y:6718874                
           },{name: 'National Capital Planning Commission',
                color: '#33CCFF',
                y:156
           },{name: 'National Credit Union Administration',
                color: '#33CCFF',
                y:217391
           },{name: 'National Endowment for the Arts',
                color: '#33CCFF',
                y:60000              
           },{name: 'National Endowment for the Humanities',
                color: '#33CCFF',
                y:100200
           },{name: 'National Indian Gaming Commision',
                color: '#33CCFF',
                y:221923
           },{name: 'National Labor Relations Board',
                color: '#33CCFF',
                y:1545333             
           },{name: 'National Mediation Board',
                color: '#33CCFF',
                y:52500
           },{name: 'National Science Foundation',
                color: '#33CCFF',
                y:243329
           },{name: 'National Transportation Safety Board',
                color: '#33CCFF',
                y:597681                
           },{name: 'U.S. Nuclear Regulatory Commission',
                color: '#33CCFF',
                y:2829193
           },{name: 'Occupational Safety and Health Review Commission',
                color: '#33CCFF',
                y:185672
           },{name: 'Office of Government Ethics',
                color: '#33CCFF',
                y:223465             
           },{name: 'Office of Navajo and Hopi Indian Relocation',
                color: '#33CCFF',
                y:77036
           },{name: 'Office of Personnel Management',
                color: '#33CCFF',
                y:1562974
           },{name: 'Office of Special Counsel',
                color: '#33CCFF',
                y:561125                
           },{name: 'Office of the Director of National Intelligence',
                color: '#33CCFF',
                y:1200000
           },{name: 'Overseas Private Investment Corporation',
                color: '#33CCFF',
                y:112793
           },{name: 'Peace Corps',
                color: '#33CCFF',
                y:134019                
           },{name: 'Pension Benefit Guaranty Corporation',
                color: '#33CCFF',
                y:372933
           },{name: 'Postal Regulatory Commission',
                color: '#33CCFF',
                y:10000
           },{name: 'Privacy and Civil Liberties Oversight Board',
                color: '#33CCFF',
                y:9800             
           },{name: 'Railroad Retirement Board',
                color: '#33CCFF',
                y:57461
           },{name: 'U.S. Securities and Exchange Commission',
                color: '#33CCFF',
                y:4149145
           },{name: 'Selective Service System',
                color: '#33CCFF',
                y:2348                
           },{name: 'U.S. Small Business Administration',
                color: '#33CCFF',
                y:1934263
           },{name: 'Social Security Administration',
                color: '#33CCFF',
                y:3595953
           },{name: 'Special Inspector General for Afghanistan Reconstruction',
                color: '#33CCFF',
                y:43057              
           },{name: 'Surface Transportation Board',
                color: '#33CCFF',
                y:98682
           },{name: 'Tennessee Valley Authority',
                color: '#33CCFF',
                y:235534
           },{name: 'U.S. Access Board',
                color: '#33CCFF',
                y:15000                
           },{name: 'U.S. African Development Foundation',
                color: '#33CCFF',
                y:5961
           },{name: 'U.S. Copyright Office',
                color: '#33CCFF',
                y:24231
           },{name: 'U.S. International Boundary and Water Commission',
                color: '#33CCFF',
                y:71782              
           },{name: 'U.S. International Trade Commission',
                color: '#33CCFF',
                y:22986
           },{name: 'U.S. Postal Service',
                color: '#33CCFF',
                y:2891692
           },{name: 'United States Trade and Development Agency',
                color: '#33CCFF',
                y:12000
        }]
      }]
});
