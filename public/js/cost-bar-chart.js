$(function () {
    $('#cost-bar-chart').highcharts({
        chart: {
            type: 'column'
        },

        title: {
        text: 'Cost Per Request',
        "style": {
        "color": "#0000"
          }
        },
        subtitle: {
        text: 'based on processing costs and total processed requests',
        "style": {
        "color": "#0000"
          }
        },

        credits: {
            enabled: true,
            href: "http://www.foia.gov/",
            text: "foai.gov"
        },
        xAxis: {
            title: {
                text: "Department/Agency",
                "style": {
                "color": "#0000"
          }
            }
        },

        yAxis: {
            title: {
                text: "Cost Per Request in Dollars",
                "style": {
                "color": "#0000"
          },
            },
        },

        tooltip: {
        pointFormat: "${point.y:,.0f} per processed request",
               style: {
          font: '"museo sans", Helvetica, Arial, sans-serif',
        }
        },

        legend: {
        enabled: false
        },

        series: [{
            data: [{
            name: 'Department of Agriculture',
                color: '#33CCFF',
                y: 540.84
            },{name: 'Department of Commerce',
                color: '#33CCFF',
                y: 7036.26   
            },{name: 'Department of Defense',
                color: '#33CCFF',
                y: 1272.46
            },{name: 'Department of Education',
                color: '#33CCFF',
                y: 1953.50   
           },{name: 'Department of Energy',
                color: '#33CCFF',
                y:4031.37
           },{name: 'Department of Health and Human Services',
                color: '#33CCFF',
                y:1075.02
            },{name: 'Department of Homeland Security',
                color: '#33CCFF',
                y:148.82              
           },{name: 'Department of Housing and Urban Development',
                color: '#33CCFF',
                y:1638.39
           },{name: 'Department of the Interior',
                color: '#33CCFF',
                y:1734.85
           },{name: 'Department of Justice',
                color: '#33CCFF',
                y:921.21
           },{name: 'Department of Labor',
                color: '#33CCFF',
                y:916.09
           },{name: 'Department of State',
                color: '#33CCFF',
                y:2100.89                
           },{name: 'Department of Transportation',
                color: '#33CCFF',
                y:755.44
           },{name: 'Department of the Treasury',
                color: '#33CCFF',
                y:1301.88
           },{name: 'Department of Veterans Affairs',
                color: '#33CCFF',
                y:432.99
           },{name: 'Administrative Conference of the United States',
                color: '#33CCFF',
                y:1581.15
           },{name: 'U.S. Agency for International Development',
                color: '#33CCFF',
                y:8635.45
           },{name: 'American Battle Monuments Commission',
                color: '#33CCFF',
                y:350.00              
           },{name: 'National Railroad Passenger Corporation (Amtrak)',
                color: '#33CCFF',
                y:683.52
           },{name: 'Armed Forces Retirement Home',
                color: '#33CCFF',
                y:2386.92
           },{name: 'Broadcasting Board of Governors',
                color: '#33CCFF',
                y:2741.04              
           },{name: 'Central Intelligence Agency',
                color: '#33CCFF',
                y:3448.16
           },{name: 'Chemical Safety and Hazard Investigation Board',
                color: '#33CCFF',
                y:1301.43
           },{name: 'U.S. Commission on Civil Rights',
                color: '#33CCFF',
                y:1590.91               
           },{name: 'Commodity Futures Trading Commission',
                color: '#33CCFF',
                y:976.47         
           },{name: 'Consumer Financial Protection Bureau',
                color: '#33CCFF',
                y:1950.75
           },{name: 'U.S. Consumer Product Safety Commission',
                color: '#33CCFF',
                y:1160.54                
           },{name: 'Corporation for National and Community Service',
                color: '#33CCFF',
                y:1160.13
           },{name: 'Council of Inspectors General on Integrity and Efficiency',
                color: '#33CCFF',
                y:100.00
           },{name: 'Court Services and Offender Supervision Agency',
                color: '#33CCFF',
                y:414.48               
           },{name: 'Defense Nuclear Facilities Safety Board',
                color: '#33CCFF',
                y:3218.80
           },{name: 'Environmental Protection Agency',
                color: '#33CCFF',
                y:873.22
           },{name: 'Equal Employment Opportunity Commission',
                color: '#33CCFF',
                y:171.21                
           },{name: 'Council on Environmental Quality',
                color: '#33CCFF',
                y:640.00
           },{name: 'Office of Management and Budget',
                color: '#33CCFF',
                y:1739.05
           },{name: 'Office of National Drug Control Policy',
                color: '#33CCFF',
                y:1063.83               
           },{name: 'Office of Science and Technology Policy',
                color: '#33CCFF',
                y:1191.49
           },{name: 'Office of the United States Trade Representative',
                color: '#33CCFF',
                y:2365.59
           },{name: 'Export-Import Bank of the U.S.',
                color: '#33CCFF',
                y:3696.46                
           },{name: 'Farm Credit Administration',
                color: '#33CCFF',
                y:815.60
           },{name: 'Farm Credit System Insurance Corporation',
                color: '#33CCFF',
                y:90.91
           },{name: 'Federal Communications Commission',
                color: '#33CCFF',
                y:3815.09                
           },{name: 'Federal Deposit Insurance Corporation',
                color: '#33CCFF',
                y:3368.52
           },{name: 'Federal Election Commission',
                color: '#33CCFF',
                y:2786.99
           },{name: 'Federal Energy Regulatory Commission',
                color: '#33CCFF',
                y:4173.59                
           },{name: 'Federal Financial Institutions Council',
                color: '#33CCFF',
                y:351.30
           },{name: 'Federal Housing Finance Agency',
                color: '#33CCFF',
                y:2337.98
           },{name: 'Federal Labor Relations Authority',
                color: '#33CCFF',
                y:277.85                
           },{name: 'Federal Maritime Commission',
                color: '#33CCFF',
                y:8508.67
           },{name: 'Federal Mediation And Conciliation Service',
                color: '#33CCFF',
                y:1403.51
           },{name: 'Federal Mine Safety and Health Review Commission',
                color: '#33CCFF',
                y:800.00               
           },{name: 'Federal Open Market Committee',
                color: '#33CCFF',
                y:3551.54
           },{name: 'Board of Governors of the Federal Reserve System',
                color: '#33CCFF',
                y:2655.18
           },{name: 'Federal Retirement Thrift Investment Board',
                color: '#33CCFF',
                y:7195.92               
           },{name: 'Federal Trade Commission',
                color: '#33CCFF',
                y:476.04
           },{name: 'U.S. General Services Administration',
                color: '#33CCFF',
                y:1156.14
           },{name: 'Institute of Museum and Library Services',
                color: '#33CCFF',
                y:552.88                
           },{name: 'Inter-American Foundation',
                color: '#33CCFF',
                y:3333.33
           },{name: 'Legal Services Corporation',
                color: '#33CCFF',
                y:939.76
           },{name: 'Merit Systems Protection Board',
                color: '#33CCFF',
                y:1757.04               
           },{name: 'Millennium Challenge Corporation',
                color: '#33CCFF',
                y:365.85
           },{name: 'National Aeronautics and Space Administration',
                color: '#33CCFF',
                y:1391.25
           },{name: 'National Archives and Records Administration',
                color: '#33CCFF',
                y:284.81                
           },{name: 'National Capital Planning Commission',
                color: '#33CCFF',
                y:52.00
           },{name: 'National Credit Union Administration',
                color: '#33CCFF',
                y:2527.80
           },{name: 'National Endowment for the Arts',
                color: '#33CCFF',
                y:1034.48               
           },{name: 'National Endowment for the Humanities',
                color: '#33CCFF',
                y:1642.62
           },{name: 'National Indian Gaming Commision',
                color: '#33CCFF',
                y:6527.15
           },{name: 'National Labor Relations Board',
                color: '#33CCFF',
                y:420.04               
           },{name: 'National Mediation Board',
                color: '#33CCFF',
                y:1500.00
           },{name: 'National Science Foundation',
                color: '#33CCFF',
                y:816.54
           },{name: 'National Transportation Safety Board',
                color: '#33CCFF',
                y:1516.96                
           },{name: 'U.S. Nuclear Regulatory Commission',
                color: '#33CCFF',
                y:4827.97
           },{name: 'Occupational Safety and Health Review Commission',
                color: '#33CCFF',
                y:3375.85
           },{name: 'Office of Government Ethics',
                color: '#33CCFF',
                y:3238.62              
           },{name: 'Office of Navajo and Hopi Indian Relocation',
                color: '#33CCFF',
                y:430.37
           },{name: 'Office of Personnel Management',
                color: '#33CCFF',
                y:144.00
           },{name: 'Office of Special Counsel',
                color: '#33CCFF',
                y:4879.35                
           },{name: 'Office of the Director of National Intelligence',
                color: '#33CCFF',
                y:3738.32
           },{name: 'Overseas Private Investment Corporation',
                color: '#33CCFF',
                y:3133.14
           },{name: 'Peace Corps',
                color: '#33CCFF',
                y:580.17                
           },{name: 'Pension Benefit Guaranty Corporation',
                color: '#33CCFF',
                y:168.22
           },{name: 'Postal Regulatory Commission',
                color: '#33CCFF',
                y:1250.00
           },{name: 'Privacy and Civil Liberties Oversight Board',
                color: '#33CCFF',
                y:816.67               
           },{name: 'Railroad Retirement Board',
                color: '#33CCFF',
                y:470.99
           },{name: 'U.S. Securities and Exchange Commission',
                color: '#33CCFF',
                y:256.01
           },{name: 'Selective Service System',
                color: '#33CCFF',
                y:335.43                
           },{name: 'U.S. Small Business Administration',
                color: '#33CCFF',
                y:2088.84
           },{name: 'Social Security Administration',
                color: '#33CCFF',
                y:156.88
           },{name: 'Special Inspector General for Afghanistan Reconstruction',
                color: '#33CCFF',
                y:1196.03               
           },{name: 'Surface Transportation Board',
                color: '#33CCFF',
                y:1518.18
           },{name: 'Tennessee Valley Authority',
                color: '#33CCFF',
                y:1207.87
           },{name: 'U.S. Access Board',
                color: '#33CCFF',
                y:1363.64                
           },{name: 'U.S. African Development Foundation',
                color: '#33CCFF',
                y:2980.50
           },{name: 'U.S. Copyright Office',
                color: '#33CCFF',
                y:712.68
           },{name: 'U.S. International Boundary and Water Commission',
                color: '#33CCFF',
                y:2563.64               
           },{name: 'U.S. International Trade Commission',
                color: '#33CCFF',
                y:766.20
           },{name: 'U.S. Postal Service',
                color: '#33CCFF',
                y:1078.99
           },{name: 'United States Trade and Development Agency',
                color: '#33CCFF',
                y:2000.00
           }]
        }]
    });
});