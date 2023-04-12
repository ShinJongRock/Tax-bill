
import React from 'react';
import Table from 'react-bootstrap/Table';


const Tax = () => {
    return (
        <center>
             {/* <Container style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}> */}
            <Table  style={{width:"800px",border: "1px solid blue"}}>
                <tr  style={{border: "1px solid blue" ,  color:'blue'}}>
                    <td colspan='15' rowspan='2' style={{height:'60px',width:'50px',fontSize:'30px'}}> 세 금 계 산 서 </td>
                    <td colSpan='7'  rowspan='2'style={{width:'10px'}}>공급받는자 보관용</td>
                    <td colSpan='4' style={{border: "1px solid blue" ,  color:'blue',width:'100px'}}>책 번 호</td>
                    <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue' ,textAlign:'right'}}>권</td>
                    <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue' ,textAlign:'right'}}>호</td>
                </tr>
                <tr>
                    <td colSpan='4'style={{border: "1px solid blue" ,  color:'blue'}}>일 현 번 호</td>
                    <td colSpan='6'style={{border: "1px solid blue" ,  color:'blue'}}></td>
                </tr>
                <tr>
                    <td  rowspan='4' style={{border: "1px solid blue" ,  color:'blue' ,width:"5px" }}>공급자</td>
                    <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue' ,width:"10px",height:'60px'}}>등록 번호</td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px' }}></td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}>-</td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}>-</td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    <td  rowspan='4' style={{border: "1px solid blue" ,  color:'blue' , width:"20px"}}>공급받는자</td>
                    <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue' , width:"10px",height:'20px'}}>등록번호</td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}>-</td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}>-</td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    <td  style={{border: "1px solid blue" ,  color:'blue' , width:'20px'}}></td>
                    
                </tr>
                <tr>
                <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue' ,width:"10px",height:'20px',fontSize:'18px'}}>상 호 (법인명)</td>
                <td colSpan='6' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                <td style={{border: "1px solid blue" ,  color:'blue'  , width:'5px'}}>성명</td>
                <td  colSpan='4' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                <td style={{border: "1px solid blue" ,  color:'blue'  , width:'5px'}}>인</td>
                <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue' ,width:"10px",height:'20px',fontSize:'20px'}}>상 호 (법인명)</td>
                <td colSpan='6' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                <td style={{border: "1px solid blue" ,  color:'blue' , width:'5px'}}>성명</td>
                <td  colSpan='4' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                <td style={{border: "1px solid blue" ,  color:'blue' , width:'5px'}}>인</td>
                </tr>

                <tr>
                <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue'  ,width:"10px",height:'20px',fontSize:'18px'}}>사업장 주소</td>
                <td colSpan='12' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue' ,width:"25px",height:'20px',fontSize:'18px'}}>사업장 주소</td>
                <td colSpan='12' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                </tr>

                <tr>
                <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue'  ,width:"10px",height:'20px'}}>업 태</td>
                <td colSpan='6' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                <td style={{border: "1px solid blue" ,  color:'blue'}}>종목</td>
                <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue' ,width:"10px",height:'20px'}}>업 태</td>
                <td colSpan='6' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                <td style={{border: "1px solid blue" ,  color:'blue'}}>종목</td>
                <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                </tr>
                <tr>
                    <td colSpan='4' style={{border: "1px solid blue" ,  color:'blue'}}>작 성</td>
                    <td colSpan='13' style={{border: "1px solid blue" ,  color:'blue'}}>공 급 가 액</td>
                    <td colSpan='10' style={{border: "1px solid blue" ,  color:'blue'}}>세 엑</td>
                    <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}>비 고</td>
                </tr>
                <tr>
                    <td colSpan='2' style={{border: "1px solid blue" ,  color:'blue'}}>년</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>월</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>일</td>
                    <td colSpan='2' style={{border: "1px solid blue" ,  color:'blue' , width:'70px'}}>공란수</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>백</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>십</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>억</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>천</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>백</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>십</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>만</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>천</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>백</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>십</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>일</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>십</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>억</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>천</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>백</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>십</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>민</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>천</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>백</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>십</td>
                    <td style={{border: "1px solid blue" ,  color:'blue' , width:'30px'}}>일</td>
                    <td colSpan='5' rowspan='2' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                
                </tr>
                <tr>
                    <td colSpan='2' style={{border: "1px solid blue" ,  color:'blue',height:'50px' }}>2020</td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td colSpan='2' style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
                        <td style={{border: "1px solid blue" ,  color:'blue',height:'50px'}}></td>
    
                    </tr>

                    <tr>
                        <td style={{border: "1px solid blue" ,  color:'blue'}}>일</td>
                        <td style={{border: "1px solid blue" ,  color:'blue'}}>월</td>
                        <td colSpan='6' style={{border: "1px solid blue" ,  color:'blue'}}>품 목</td>
                        <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue'}}>규격</td>
                        <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue'}}>수량</td>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}>단 가</td>
                        <td colSpan='6' style={{border: "1px solid blue" ,  color:'blue'}}>공 급 가 액</td>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}>세 액</td>
                        <td colSpan='2' style={{border: "1px solid blue" ,  color:'blue'}}>비고</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid blue" ,  color:'blue' }}>1</td>
                        <td style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='6' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='6' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='2' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid blue" ,  color:'blue' }}>1</td>
                        <td style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='6' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='6' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='2' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                    </tr>
    
                    <tr>
                        <td style={{border: "1px solid blue" ,  color:'blue' }}>1</td>
                        <td style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='6' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='6' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='2' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                    </tr>
    
                    <tr>
                        <td style={{border: "1px solid blue" ,  color:'blue' }}>1</td>
                        <td style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='6' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='3' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='6' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='2' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                    </tr>

                    <tr>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}>합계금액</td>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}>현 금</td>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}>수표</td>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}>어음</td>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}>외상미수금</td>
                        <td colSpan='7'  rowspan='2' style={{border: "1px solid blue" ,  color:'blue'}}>이금액을 영수함</td>


                    </tr>
                    <tr>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}>1</td>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}></td>
                        <td colSpan='5' style={{border: "1px solid blue" ,  color:'blue'}}></td>

                    </tr>
    

       
            </Table>
            <br/> <br/> <br/>

            <Table  style={{width:"800px",border: "1px solid red"  }}>
                <tr  style={{border: "1px solid red" ,  color:'red'}}>
                    <td colspan='15' rowspan='2' style={{height:'60px',width:'50px',fontSize:'30px'}}> 세 금 계 산 서 </td>
                    <td colSpan='7'  rowspan='2'style={{width:'10px'}}>공급받는자 보관용</td>
                    <td colSpan='4' style={{border: "1px solid red" ,  color:'red',width:'100px'}}>책 번 호</td>
                    <td colSpan='3' style={{border: "1px solid red" ,  color:'red' ,textAlign:'right'}}>권</td>
                    <td colSpan='3' style={{border: "1px solid red" ,  color:'red' ,textAlign:'right'}}>호</td>
                </tr>
                <tr>
                    <td colSpan='4'style={{border: "1px solid red" ,  color:'red'}}>일 현 번 호</td>
                    <td colSpan='6'style={{border: "1px solid red" ,  color:'red'}}></td>
                </tr>
                <tr>
                    <td  rowspan='4' style={{border: "1px solid red" ,  color:'red' ,width:"5px" }}>공급자</td>
                    <td colSpan='3' style={{border: "1px solid red" ,  color:'red' ,width:"10px",height:'60px'}}>등록 번호</td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px' }}></td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}>-</td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}>-</td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    <td  rowspan='4' style={{border: "1px solid red" ,  color:'red' , width:"20px"}}>공급받는자</td>
                    <td colSpan='3' style={{border: "1px solid red" ,  color:'red' , width:"10px",height:'20px'}}>등록번호</td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}>-</td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}>-</td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    <td  style={{border: "1px solid red" ,  color:'red' , width:'20px'}}></td>
                    
                </tr>
                <tr>
                <td colSpan='3' style={{border: "1px solid red" ,  color:'red' ,width:"10px",height:'20px',fontSize:'18px'}}>상 호 (법인명)</td>
                <td colSpan='6' style={{border: "1px solid red" ,  color:'red'}}></td>
                <td style={{border: "1px solid red" ,  color:'red'  , width:'5px'}}>성명</td>
                <td  colSpan='4' style={{border: "1px solid red" ,  color:'red'}}></td>
                <td style={{border: "1px solid red" ,  color:'red'  , width:'5px'}}>인</td>
                <td colSpan='3' style={{border: "1px solid red" ,  color:'red' ,width:"10px",height:'20px',fontSize:'20px'}}>상 호 (법인명)</td>
                <td colSpan='6' style={{border: "1px solid red" ,  color:'red'}}></td>
                <td style={{border: "1px solid red" ,  color:'red' , width:'5px'}}>성명</td>
                <td  colSpan='4' style={{border: "1px solid red" ,  color:'red'}}></td>
                <td style={{border: "1px solid red" ,  color:'red' , width:'5px'}}>인</td>
                </tr>

                <tr>
                <td colSpan='3' style={{border: "1px solid red" ,  color:'red'  ,width:"10px",height:'20px',fontSize:'18px'}}>사업장 주소</td>
                <td colSpan='12' style={{border: "1px solid red" ,  color:'red'}}></td>
                <td colSpan='3' style={{border: "1px solid red" ,  color:'red' ,width:"25px",height:'20px',fontSize:'18px'}}>사업장 주소</td>
                <td colSpan='12' style={{border: "1px solid red" ,  color:'red'}}></td>
                </tr>

                <tr>
                <td colSpan='3' style={{border: "1px solid red" ,  color:'red'  ,width:"10px",height:'20px'}}>업 태</td>
                <td colSpan='6' style={{border: "1px solid red" ,  color:'red'}}></td>
                <td style={{border: "1px solid red" ,  color:'red'}}>종목</td>
                <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}></td>
                <td colSpan='3' style={{border: "1px solid red" ,  color:'red' ,width:"10px",height:'20px'}}>업 태</td>
                <td colSpan='6' style={{border: "1px solid red" ,  color:'red'}}></td>
                <td style={{border: "1px solid red" ,  color:'red'}}>종목</td>
                <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}></td>
                </tr>
                <tr>
                    <td colSpan='4' style={{border: "1px solid red" ,  color:'red'}}>작 성</td>
                    <td colSpan='13' style={{border: "1px solid red" ,  color:'red'}}>공 급 가 액</td>
                    <td colSpan='10' style={{border: "1px solid red" ,  color:'red'}}>세 엑</td>
                    <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}>비 고</td>
                </tr>
                <tr>
                    <td colSpan='2' style={{border: "1px solid red" ,  color:'red'}}>년</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>월</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>일</td>
                    <td colSpan='2' style={{border: "1px solid red" ,  color:'red' , width:'70px'}}>공란수</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>백</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>십</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>억</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>천</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>백</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>십</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>만</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>천</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>백</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>십</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>일</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>십</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>억</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>천</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>백</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>십</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>민</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>천</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>백</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>십</td>
                    <td style={{border: "1px solid red" ,  color:'red' , width:'30px'}}>일</td>
                    <td colSpan='5' rowspan='2' style={{border: "1px solid red" ,  color:'red'}}></td>
                
                </tr>
                <tr>
                    <td colSpan='2' style={{border: "1px solid red" ,  color:'red',height:'50px' }}>2020</td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td colSpan='2' style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
                        <td style={{border: "1px solid red" ,  color:'red',height:'50px'}}></td>
    
                    </tr>

                    <tr>
                        <td style={{border: "1px solid red" ,  color:'red'}}>일</td>
                        <td style={{border: "1px solid red" ,  color:'red'}}>월</td>
                        <td colSpan='6' style={{border: "1px solid red" ,  color:'red'}}>품 목</td>
                        <td colSpan='3' style={{border: "1px solid red" ,  color:'red'}}>규격</td>
                        <td colSpan='3' style={{border: "1px solid red" ,  color:'red'}}>수량</td>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}>단 가</td>
                        <td colSpan='6' style={{border: "1px solid red" ,  color:'red'}}>공 급 가 액</td>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}>세 액</td>
                        <td colSpan='2' style={{border: "1px solid red" ,  color:'red'}}>비고</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid red" ,  color:'red' }}>1</td>
                        <td style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='6' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='3' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='3' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='6' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='2' style={{border: "1px solid red" ,  color:'red'}}></td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid red" ,  color:'red' }}>1</td>
                        <td style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='6' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='3' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='3' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='6' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='2' style={{border: "1px solid red" ,  color:'red'}}></td>
                    </tr>
    
                    <tr>
                        <td style={{border: "1px solid red" ,  color:'red' }}>1</td>
                        <td style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='6' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='3' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='3' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='6' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='2' style={{border: "1px solid red" ,  color:'red'}}></td>
                    </tr>
    
                    <tr>
                        <td style={{border: "1px solid red" ,  color:'red' }}>1</td>
                        <td style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='6' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='3' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='3' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='6' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='2' style={{border: "1px solid red" ,  color:'red'}}></td>
                    </tr>

                    <tr>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}>합계금액</td>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}>현 금</td>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}>수표</td>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}>어음</td>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}>외상미수금</td>
                        <td colSpan='7'  rowspan='2' style={{border: "1px solid red" ,  color:'red'}}>이금액을 영수함</td>


                    </tr>
                    <tr>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}>1</td>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}></td>
                        <td colSpan='5' style={{border: "1px solid red" ,  color:'red'}}></td>

                    </tr>
    

       
            </Table>

            {/* </Container> */}

        </center>

    );
};

export default Tax;