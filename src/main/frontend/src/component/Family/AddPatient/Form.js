import { useEffect, useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [birth, setBirth] = useState();
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [diagnosis, setDiagnosis] = useState('');
    const [consciousness_state, setConsciousness_state] = useState('');
    const [paralysis_state, setParalysis_state] = useState('');
    const [mobility_state, setMobility_state] = useState('');
    const [notice, setNotice] = useState('');

    //form에 포함될 input을 편하게 작성하기 위한 정보 모음
    const formInputInfos = {
        name: {
            label: "성함",
            type: "text",
            name: "user_name",
            id: "user_name",
            maxLength: 15,
        },
        birth: {
            label: "생년월일",
            type: "date",
            name: "birth",
            id: "birth",
            maxLength: 20,
        },
        height: {
            label: "키 (cm)",
            type: "text",
            name: "height",
            id: "height",
            maxLength: 20,
        },
        weight: {
            label: "몸무게(kg)",
            type: "text",
            name: "height",
            id: "height",
            maxLength: 20,
        },
        diagnosis: {
            label: "진단명",
            type: "text",
            name: "diagnosis",
            id: "diagnosis",
            maxLength: 45,
        },
        consciousness_state: {
            label: "의식상태",
            type: "text",
            name: "consciousness_state",
            id: "consciousness_state",
            maxLength: 45,
        },
        paralysis_state: {
            label: "마비상태",
            type: "text",
            name: "paralysis_state",
            id: "paralysis_state",
            maxLength: 45,
        },
        mobility_state: {
            label: "이동가능상태?!",
            type: "text",
            name: "mobility_state",
            id: "mobility_state",
            maxLength: 45,
        },
        notice: {
            label: "추가사항",
            type: "textarea",
            name: "notice",
            id: "notice",
            maxLength: 200,
        },
    };
    const formInputs = ($typeName) => {
        return (
            <div className="input_wrapper">
                <label>{formInputInfos[$typeName].label}</label>
                <input
                    type={formInputInfos[$typeName].type}
                    placeholder={formInputInfos[$typeName].label}
                    name={formInputInfos[$typeName].name}
                    id={formInputInfos[$typeName].id}
                    maxLength={formInputInfos[$typeName].maxLength}
                />
            </div>
        );
    };

    return (
        <div>
            <form name="addPatient">
                <h2>기본 정보</h2>
                <div>
                    {formInputs("name")}

                    <div className="input_wrapper">
                        <label>성별</label>
                        <div className="input_radio">
                            <div className="radio_user_type">
                                <input type="radio" id="gender" name="gender" value="M" />
                                <span>남자</span>
                            </div>
                            <div className="radio_user_type">
                                <input type="radio" id="gender" name="gender" value="W" />
                                <span>여자</span>
                            </div>
                        </div>
                    </div>

                    {formInputs("birth")}
                    {formInputs("height")}
                    {formInputs("weight")}
                    {formInputs("diagnosis")}
                </div>

                <h2>상세 정보</h2>
                    {formInputs("consciousness_state")}
                    <div className="input_wrapper">
                        <label>식사보조필요</label>
                        <div className="input_radio">
                            <div className="radio_user_type">
                                <input type="radio" id="care_meal_yn" name="care_meal_yn" value="Y" />
                                <span>네</span>
                            </div>
                            <div className="radio_user_type">
                                <input type="radio" id="care_meal_yn" name="care_meal_yn" value="N" />
                                <span>아니요</span>
                            </div>
                        </div>
                    </div>

                    <div className="input_wrapper">
                        <label>화장실 동행 필요</label>
                        <div className="input_radio">
                            <div className="radio_user_type">
                                <input type="radio" id="care_toilet_yn" name="care_toilet_yn" value="Y" />
                                <span>네</span>
                            </div>
                            <div className="radio_user_type">
                                <input type="radio" id="care_toilet_yn" name="care_toilet_yn" value="N" />
                                <span>아니요</span>
                            </div>
                        </div>
                    </div>

                    <div className="input_wrapper">
                        <label>욕창 유무</label>
                        <div className="input_radio">
                            <div className="radio_user_type">
                                <input type="radio" id ="bedsore_yn" name="bedsore_yn" value="Y" />
                                <span>네</span>
                            </div>
                            <div className="radio_user_type">
                                <input type="radio" id="bedsore_yn" name="bedsore_yn" value="N" />
                                <span>아니요</span>
                            </div>
                        </div>
                    </div>
                    <div className="input_wrapper">
                        <label>석션 필요</label>
                        <div className="input_radio">
                            <div className="radio_user_type">
                                <input type="radio" id ="suction_yn" name="suction_yn" value="Y" />
                                <span>네</span>
                            </div>
                            <div className="radio_user_type">
                                <input type="radio" id="suction_yn" name="suction_yn" value="N" />
                                <span>아니요</span>
                            </div>
                        </div>
                    </div>
                    <div className="input_wrapper">
                        <label>동행 외출 필요</label>
                        <div className="input_radio">
                            <div className="radio_user_type">
                                <input type="radio" id ="outpatient_yn" name="outpatient_yn" value="Y" />
                                <span>네</span>
                            </div>
                            <div className="radio_user_type">
                                <input type="radio" id="outpatient_yn" name="outpatient_yn" value="N" />
                                <span>아니요</span>
                            </div>
                        </div>
                    </div>
                    <div className="input_wrapper">
                        <label>야간 간병</label>
                        <div className="input_radio">
                            <div className="radio_user_type">
                                <input type="radio" id ="bedsornight_care_yne_yn" name="bedsornight_care_yne_yn" value="Y" />
                                <span>네</span>
                            </div>
                            <div className="radio_user_type">
                                <input type="radio" id="bedsornight_care_yne_yn" name="bedsornight_care_yne_yn" value="N" />
                                <span>아니요</span>
                            </div>
                        </div>
                    </div>

                    {formInputs("paralysis_state")}
                    {formInputs("mobility_state")}
                    {formInputs("notice")}
                    <input type="submit" value='환자 등록'/>
                <div>

                </div>
            </form>
        </div>
    );
};

export default Form;
