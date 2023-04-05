package zacdemo.simplejava.error;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class GlobalExceptionHandler implements ErrorController {

	private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @RequestMapping("/error")
    public String handleError() {
        //do something like logging
		logger.info("ERROR Demo");
        return "error";
    }
}
