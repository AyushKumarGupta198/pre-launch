import { useEffect } from "react";
import { initCleverTap, pushEvent } from "@/lib/clevertap";

// const SESSION_KEY = "ct_pre_launch_sent";

export function usePreLaunchEvent() {
  useEffect(() => {
    // Fire only once per browser session
    // if (sessionStorage.getItem(SESSION_KEY)) return;

    // Initialize CleverTap
    initCleverTap();

    // Push the event (add any extra props you want)
    pushEvent("Pre-launch load", {
      timestamp: new Date(),
    });
    // Mark as sent for this session
    // sessionStorage.setItem(SESSION_KEY, "true");
  }, []); // runs once on mount
}