import { BBDynamicAnimationsHandler } from './dynamic-animations-handler.model';
import { BBAnimationStatesService } from '../animation-states/animation-states.service';
import { BBStateCssMapperService } from '../state-css-mapper/state-css-mapper.service';

export interface BBDynamicAnimationsHandlerConstructor {
    new<T extends BBDynamicAnimationsHandler>( 
        element: any,
        cssMapperService: BBStateCssMapperService,
        animationStatesBuilder: BBAnimationStatesService):T;
}