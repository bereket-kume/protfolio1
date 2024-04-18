import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
import { VerticalTimeLine } from 'react-vertical-timeline-component';

const Exp = () => {
    return ( <div className='mb-4'>
        <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement className='vertical-timeline-element--education'
             date='2014-2018'
             iconStyle={{ background:'#3e497a' ,color:"#fff"}}
             icon={<SchoolIcon lineColor='white' />}
            >
                <h3 className='vertical-timeline-element-title'>
                    my high school, at same place random state
                </h3>
                <p>High School certifacte</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education'
             date='2019-2021'
             iconStyle={{ background:'#3e497a' ,color:"#fff"}}
             icon={<SchoolIcon lineColor='white' />}
            >
                <h3 className='vertical-timeline-element-title'>
                    some University, at same place random state
                </h3>
                <p>Bachelor's degree</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education'
             date='2022-2023'
             iconStyle={{ background:'#e9d35b' ,color:"#fff"}}
             icon={<WorkIcon lineColor='white' />}
            >
                <h3 className='vertical-timeline-element-title'>
                    work at some company, at same place random state
                </h3>
                <p>Fornt-End Developer</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education'
             date='2024-2026'
             iconStyle={{ background:'#e9d35b' ,color:"#fff"}}
             icon={<WorkIcon lineColor='white' />}
            >
                <h3 className='vertical-timeline-element-title'>
                    work at some company, at same place random state
                </h3>
                <p>Full-Stack Developer</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div> );
}
 
export default Exp;