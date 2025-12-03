"use client";

import { useState } from "react";

export default function Departments() {
  const [activeTab, setActiveTab] = useState("tabs-tab-1");

  const departments = [
    {
      id: "tabs-tab-1",
      name: "Rối loạn giấc ngủ",
      description:
        "Chuyên khoa điều trị các rối loạn giấc ngủ như mất ngủ, khó ngủ, ngủ không sâu giấc",
      detail:
        "Với đội ngũ bác sĩ chuyên môn cao và trang thiết bị hiện đại, chúng tôi cam kết mang đến giải pháp điều trị hiệu quả nhất cho bệnh nhân. Phương pháp điều trị kết hợp giữa y học hiện đại và liệu pháp tâm lý.",
      image: "assets/img/departments-1.png",
    },
    {
      id: "tabs-tab-2",
      name: "Điều trị Stress",
      description:
        "Hỗ trợ điều trị stress, căng thẳng do áp lực công việc và cuộc sống",
      detail:
        "Chương trình điều trị stress toàn diện bao gồm tư vấn tâm lý, liệu pháp thư giãn và các phương pháp điều trị hiện đại giúp bệnh nhân giảm căng thẳng và cải thiện chất lượng cuộc sống.",
      image: "assets/img/departments-2.png",
    },
    {
      id: "tabs-tab-3",
      name: "Tâm lý trị liệu",
      description: "Tư vấn và điều trị các vấn đề tâm lý, hành vi và cảm xúc",
      detail:
        "Dịch vụ tư vấn tâm lý chuyên nghiệp cho cá nhân và gia đình. Chúng tôi áp dụng các phương pháp điều trị tâm lý hiện đại, phù hợp với từng đối tượng bệnh nhân.",
      image: "assets/img/departments-3.png",
    },
    {
      id: "tabs-tab-4",
      name: "Khám tổng quát",
      description:
        "Khám và tư vấn sức khỏe tổng quát, tầm soát các vấn đề sức khỏe",
      detail:
        "Dịch vụ khám sức khỏe tổng quát với quy trình chuyên nghiệp, đội ngũ y bác sĩ giàu kinh nghiệm. Chúng tôi cung cấp các gói khám sức khỏe phù hợp với từng độ tuổi.",
      image: "assets/img/departments-4.png",
    },
    {
      id: "tabs-tab-5",
      name: "Tư vấn dinh dưỡng",
      description: "Tư vấn chế độ dinh dưỡng hợp lý cho sức khỏe tâm thần",
      detail:
        "Chế độ dinh dưỡng có vai trò quan trọng trong việc cải thiện giấc ngủ và giảm stress. Chúng tôi tư vấn chế độ ăn uống khoa học, phù hợp với tình trạng sức khỏe của từng bệnh nhân.",
      image: "assets/img/departments-5.png",
    },
  ];

  return (
    <section id="tabs" className="tabs section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Chuyên khoa</h2>
        <p>Các chuyên khoa của Phòng khám Quang Tâm</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column" role="tablist">
              {departments.map((dept, index) => (
                <li className="nav-item" role="presentation" key={dept.id}>
                  <a
                    className={`nav-link ${
                      activeTab === dept.id ? "active show" : ""
                    }`}
                    data-bs-toggle="tab"
                    href={`#${dept.id}`}
                    aria-selected={activeTab === dept.id}
                    role="tab"
                    onClick={() => setActiveTab(dept.id)}
                  >
                    {dept.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              {departments.map((dept) => (
                <div
                  className={`tab-pane ${
                    activeTab === dept.id ? "active show" : ""
                  }`}
                  id={dept.id}
                  role="tabpanel"
                  key={dept.id}
                >
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>{dept.name}</h3>
                      <p className="fst-italic">{dept.description}</p>
                      <p>{dept.detail}</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={dept.image} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
